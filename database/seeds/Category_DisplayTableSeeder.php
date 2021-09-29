<?php

use Illuminate\Database\Seeder;

class Category_DisplayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_display')->insert(
            [
            'display_id' => 8,
            'category_id' => 14,
            ]);
    }
}
