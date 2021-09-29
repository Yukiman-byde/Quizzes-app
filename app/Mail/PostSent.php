<?php

namespace App\Mail;

use App\Models\Post;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PostSent extends Mailable
{
    use Queueable, SerializesModels;
    protected $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        // $this->title = "送信されました！";
        // $this->data['user'] = $user;
        // $this->data['post'] = $post:
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
    //   return $this->markdown('sents')
    //     ->subject($this->title)
    //     ->with($this->data);

  
     return $this
          ->from('fungashaka@gmail.com')  // 送信元
          ->view('mail') // どのテンプレートを呼び出すか
          ->with([
              'data' =>$this->data
              ]); // withオプションでセットしたデータをテンプレートへ受け渡す
    }
}
