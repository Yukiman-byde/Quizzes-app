<?php

use Illuminate\Database\Seeder;

class DisplaysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('displays')->insert(
            [
            'name' => 'Where tradition meets the future',
            'description' => 'Have a fun and imagine your next trip in Japan!',
            'video' => 'https://www.youtube.com/embed/WLIv7HnZ_fE',
            'thumbnail' => 'https://pixabay.com/photos/japan-mountain-volcano-fuji-sky-4287832/',
            'transcription_id' => 9,
            'category_id' => 8,
            ]);
    }
}
