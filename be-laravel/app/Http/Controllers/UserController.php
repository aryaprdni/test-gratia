<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function GetAllDoctors(Request $request)
    {
        $doctors = User::where('role', 'doctor')->get();
        $user = $request->user();

        return response()->json([
            'message' => 'Doctors retrieved successfully',
            'data' => $doctors
        ], 200);
    }
}
