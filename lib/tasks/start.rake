desc "Build assets and start server"
task :start do
    system "yarn", "build", exception: true
    system "bin/rails", "assets:precompile", exception: true
    system "rails", "s", exception: true
end