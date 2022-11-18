<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Guest;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ];

        $user = Guest::create($input);
        $data = [
            'message' => 'User is created successfully',
        ];

        return response()->json($data, 200);
    }

    public function login(Request $request)
    {
        $input = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        $user = Guest::where('email', $input['email'])->first();
        $isLoginSuccessfully = ($input['email'] == $user->email && Hash::check($input['password'], $user->password));

        if ($isLoginSuccessfully) {
            $token = $user->createToken('auth_token');
            $data = [
                'message' => 'Login Succesfully',
                'token' => $token->plainTextToken,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Email or Password wrong'
            ];

            return response()->json($data, 401);
        }
    }
}
