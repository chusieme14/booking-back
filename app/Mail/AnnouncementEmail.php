<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AnnouncementEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $email;
    public $title;
    public $content;
    public $graduate;

    public function __construct($email, $title, $content, $graduate)
    {
        $this->email = $email;
        $this->title = $title;
        $this->content = $content;
        $this->graduate = $graduate;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->title)
                    ->view('email.announcement',['graduate' => $this->graduate, 'title' => $this->title]);
    }
}
