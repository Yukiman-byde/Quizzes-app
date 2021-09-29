<?php

use Illuminate\Database\Seeder;

class QuizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('quizzes')->insert(
            [
            'question' => '何に対してOopsと言ったのか？',
            'answear' => 2,
            'choice1' => "相手が赤い服を着ていること",
            'choice2' => "空がきれいなこと　",
            'choice3' => "お腹がすいていること",
            'display_id' => 6,
            ]);
    }
}
