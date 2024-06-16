<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateModelResources extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:model-resources {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create model, migration, factory, and seeder';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $name = $this->argument('name');

        $this->call('make:model', ['name' => $name, '-m' => true]);
        $this->call('make:factory', ['name' => "{$name}Factory", '--model' => $name]);
        $this->call('make:seeder', ['name' => "{$name}Seeder"]);

        $this->info("Model, migration, factory, and seeder created for $name");
    }
}
