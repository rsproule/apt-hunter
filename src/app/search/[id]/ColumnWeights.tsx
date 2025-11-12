"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Column {
  id: string;
  name: string;
  type: string;
  description: string;
  weight: number;
  inverted: boolean;
}

interface ColumnWeightsProps {
  enhancementIds: string[];
  columns: Column[];
}

export default function ColumnWeights({
  enhancementIds,
  columns: initialColumns,
}: ColumnWeightsProps) {
  const router = useRouter();
  const [columns, setColumns] = useState(initialColumns);
  const [isSaving, setIsSaving] = useState(false);
  const [lastEnhancementIds, setLastEnhancementIds] = useState(enhancementIds.join(','));

  // Only update columns when the enhancement IDs change (different enhancement selected)
  // NOT when the page refreshes with the same data
  useEffect(() => {
    const currentIds = enhancementIds.join(',');
    if (currentIds !== lastEnhancementIds) {
      setColumns(initialColumns);
      setLastEnhancementIds(currentIds);
    }
  }, [enhancementIds, initialColumns, lastEnhancementIds]);

  const handleWeightChange = (columnId: string, newWeight: number[]) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, weight: newWeight[0] } : col,
      ),
    );
  };

  const handleSave = async () => {
    setIsSaving(true);

    try {
      // Update weights via API for all enhancements
      await Promise.all(
        enhancementIds.map((enhancementId) =>
          fetch(`/api/enhancements/${enhancementId}/weights`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              weights: columns.map((col) => ({
                columnId: col.id,
                weight: col.weight,
              })),
            }),
          }),
        ),
      );

      // Refresh the page to recalculate composite scores
      router.refresh();
    } catch (error) {
      console.error("Error saving weights:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const hasChanges = columns.some((col) => {
    const initial = initialColumns.find((c) => c.id === col.id);
    return initial && col.weight !== initial.weight;
  });

  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Adjust Importance</h3>
        {hasChanges && (
          <Button
            onClick={handleSave}
            disabled={isSaving}
            size="sm"
          >
            {isSaving ? "Saving..." : "Apply"}
          </Button>
        )}
      </div>

      <div className="space-y-2">
        {columns.map((column) => (
          <div key={column.id} className="flex items-center gap-3 py-1">
            {/* Column name */}
            <div className="min-w-[200px]">
              <p className="text-xs font-medium capitalize leading-tight">
                {column.name.replace(/_/g, " ")}
              </p>
            </div>

            {/* Slider */}
            <div className="flex-1 min-w-[140px]">
              <Slider
                id={`weight-${column.id}`}
                min={0}
                max={10}
                step={1}
                value={[column.weight]}
                onValueChange={(value) => handleWeightChange(column.id, value)}
                className="w-full"
              />
            </div>

            {/* Weight value */}
            <span className="text-xs font-mono w-8 text-right text-gray-700 dark:text-gray-300">
              {column.weight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

