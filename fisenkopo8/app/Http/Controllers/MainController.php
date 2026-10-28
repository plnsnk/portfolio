<?php

namespace App\Http\Controllers;



use App\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Spatie\FlareClient\Http\Response;

class MainController extends Controller
{
    public function index()
    {
       
        return view('index');
    }
    


}