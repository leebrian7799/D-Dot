# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create({username: 'guest', password: '123456'})
user2 = User.create({username: 'Bill', password: '123456'})
user3 = User.create({username: 'Mill', password: '123456'})
user4 = User.create({username: 'Dill', password: '123456'})
user5 = User.create({username: 'Phil', password: '123456'})


rand_photo_size = [
  "https://picsum.photos/1920/1080/?random",
  "https://picsum.photos/1920/1080/?random",
  "https://picsum.photos/1920/1080/?random",
  "https://picsum.photos/500/500/?random",
  "https://picsum.photos/500/700/?random",
  "https://picsum.photos/500/600/?random"
]

300.times do |i|
  Photo.create!(
    author_id: User.all.sample.id,
    title: Faker::Simpsons.location,
    description: Faker::Simpsons.quote,
    image: URI.parse(rand_photo_size.sample)
  )
end
