<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTreatment;
use App\Models\Treatment;
use Illuminate\Http\JsonResponse;

class TreatmentController extends Controller
{
    public function CreateTreatment(CreateTreatment $request): JsonResponse
    {
        $data = $request->validated();
        $user = auth()->user();

        $treatment = new Treatment($data);
        $treatment->save();

        return response()->json([
            'message' => 'Treatment created successfully',
            'data' => $treatment
        ], 201);
    }

    public function GetAllTreatments(): JsonResponse
    {
        $treatments = Treatment::all();

        return response()->json([
            'message' => 'All treatments retrieved successfully',
            'data' => $treatments
        ], 200);
    }
}
