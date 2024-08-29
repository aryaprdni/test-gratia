<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAppointmentRequest;
use App\Models\Appointment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function createAppointment(CreateAppointmentRequest $request): JsonResponse
    {
        $data = $request->validated();
        $user = auth()->user();

        $appointment = new Appointment($data);
        $appointment->user_id = $user->id;
        $appointment->status = 'pending';
        $appointment->save();

        return response()->json([
            'message' => 'Appointment created successfully',
            'appointment' => $appointment
        ], 201);
    }

    public function getAllAppointments(): JsonResponse
    {
        $appointments = Appointment::with(['doctor', 'treatment'])->get();

        return response()->json([
            'message' => 'Appointments retrieved successfully',
            'data' => $appointments
        ], 200);
    }
}
