"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Column {
  id: string;
  name: string;
  type: string;
  description: string;
  weight: number;
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

  // Update columns when props change (e.g., new enhancement added)
  useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);

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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Adjust Importance</CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Set how much each feature matters to you (0-10)
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor={`weight-${column.id}`}
                className="text-sm font-medium capitalize"
              >
                {column.name.replace(/_/g, " ")}
              </Label>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                {column.weight.toFixed(1)}
              </span>
            </div>
            <p className="text-xs text-gray-500">{column.description}</p>
            <Slider
              id={`weight-${column.id}`}
              min={0}
              max={10}
              step={0.5}
              value={[column.weight]}
              onValueChange={(value) => handleWeightChange(column.id, value)}
              className="w-full"
            />
          </div>
        ))}

        {hasChanges && (
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full"
          >
            {isSaving ? "Recalculating..." : "Apply & Re-rank"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

