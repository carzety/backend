<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Covid;

class PasienController extends Controller
{
    public function index()
    {
        $patients = Covid::all();
        $data = [
            'message' => 'Get All Resources',
            'data' => $patients,
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $validateData = $request->validate ([
            'name' => 'required',
            'phone' => 'numeric|required',
            'address' => 'required',
            'status' => 'required',
            'in_date_at' => 'required',
            'out_date_at' => 'required'
        ]);
        
        $patients = Covid::create($validateData);

        $data = [
            'message' => 'Resource is added successfully',
            'data' => $patients,
        ];

        return response()->json($data, 201);
    }

    public function show($id)
    {
        $patients = Covid::find($id);
        if ($patients) {
            $data = [
                'message' => 'Get detail resource',
                'data' => $patients,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function update(Request $request, $id)
    {
        $patients = Covid::find($id);
        if ($patients) {
            $input = [
                'name' => $request->name ?? $patients->name,
                'phone' => $request->phone ?? $patients->phone,
                'address' => $request->status ?? $patients->address,
                'status' => $request->status ?? $patients->status,
                'in_date_at' => $request->in_date_at ?? $patients->in_date_at,
                'out_date_at' => $request->out_date_at ?? $patients->out_date_at,
            ];

            $patients->update($input);
            $data = [
                'message' => 'Resource is update successfully',
                'data' => $patients,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function destroy($id)
    {
        $patients = Covid::find($id);
        if ($patients) {
            $patients->delete();
            $data = [
                'message' => 'Resource is delete successfully',
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function search($name)
    {
        $patients = Covid::where("name", "like", "%" .$name. "%")->get();
        if (count($patients)) {
            $data = [
                'message' => 'Get searched resource',
                'data' => $patients,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource',
            ];

            return response()->json($data, 404);
        }
    }

    public function status($status)
        {
            $patients = Covid::where("status", "like", "%" .$status. "%")->get();
            $jumlah = Covid::where("status", "like", "%" .$status. "%")->count();
            $data = [
                'message' => 'Get all resource',
                'jumlah' => $jumlah,
                'data' => $patients,
            ];

            return response()->json($data, 200);
        }

        public function positive()
        {
            $patients = Covid::where("status", "positive")->get();
            $jumlah = Covid::where("status", "positive")->count();
            $data = [
                'message' => 'Get positive resource',
                'jumlah' => $jumlah,
                'data' => $patients,
            ];

            return response()->json($data, 201);
        }

        public function recovered()
        {
            $patients = Covid::where("status", "recovered")->get();
            $jumlah = Covid::where("status", "recovered")->count();
            $data = [
                'message' => 'Get recovered resource',
                'jumlah' => $jumlah,
                'data' => $patients,
            ];

            return response()->json($data, 200);
        }

        public function dead()
        {
            $patients = Covid::where("status", "dead")->get();
            $jumlah = Covid::where("status", "dead")->count();
            $data = [
                'message' => 'Get dead resource',
                'jumlah' => $jumlah,
                'data' => $patients,
            ];

            return response()->json($data, 200);
        }
}