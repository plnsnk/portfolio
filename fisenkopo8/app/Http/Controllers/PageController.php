<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuItem;

class PageController extends Controller
{
    public function home()
    {
        // Получаем первые 6 активных записей из базы данных
        $hits = MenuItem::orderBy('id', 'asc')->limit(6)->get();
        
        return view('pages.home', compact('hits'));
    }

    public function menu(Request $request)
    {
        $category = $request->get('category', 'all');
        
        $query = MenuItem::query();

        if ($category !== 'all') {
            $query->where('category', $category);
        }

        $items = $query->paginate(6)->withQueryString();

        return view('pages.menu', [
            'items' => $items,
            'category' => $category
        ]);
    }
}