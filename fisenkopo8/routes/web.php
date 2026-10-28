<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

use App\Http\Controllers\PageController;
use App\Http\Controllers\Admin\MenuItemController;

// Публичные маршруты
Route::get('/', [MainController::class, 'index']);