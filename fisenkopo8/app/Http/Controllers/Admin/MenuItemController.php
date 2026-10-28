<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
    // 1. Показать список всех товаров
    public function index()
    {
        $items = MenuItem::orderBy('id', 'desc')->paginate(15);
        return view('admin.menu-items.index', compact('items'));
    }

    // 2. Показать форму создания
    public function create()
    {
        return view('admin.menu-items.form', ['item' => new MenuItem()]);
    }

    // 3. Сохранить новый товар в БД
    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:10',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|string|max:50',
            'category' => 'required|in:coffee,cold,smoothie,breakfast',
            'tag' => 'nullable|string|max:100',
            'is_active' => 'nullable|boolean',
        ]);

        $validated['is_active'] = $request->has('is_active') ? 1 : 0;

        MenuItem::create($validated);

        return redirect()->route('admin.menu-items.index')->with('success', 'Напиток успешно добавлен!');
    }

    // 4. Показать форму редактирования
    public function edit(MenuItem $menuItem)
    {
        return view('admin.menu-items.form', ['item' => $menuItem]);
    }

    // 5. Обновить товар в БД
    public function update(Request $request, MenuItem $menuItem)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:10',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|string|max:50',
            'category' => 'required|in:coffee,cold,smoothie,breakfast',
            'tag' => 'nullable|string|max:100',
            'is_active' => 'nullable|boolean',
        ]);

        $validated['is_active'] = $request->has('is_active') ? 1 : 0;

        $menuItem->update($validated);

        return redirect()->route('admin.menu-items.index')->with('success', 'Напиток успешно обновлён!');
    }

    // 6. Удалить товар
    public function destroy(MenuItem $menuItem)
    {
        $menuItem->delete();
        return redirect()->route('admin.menu-items.index')->with('success', 'Напиток удалён.');
    }
}