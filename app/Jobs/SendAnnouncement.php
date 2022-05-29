<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use App\Mail\AnnouncementEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SendAnnouncement implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
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
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to(preg_replace('/\s+/', '', $this->email))->send(new AnnouncementEmail($this->email, $this->title, $this->content, $this->graduate));
    }
}
