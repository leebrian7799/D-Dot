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

photo1 = Photo.create({
  title: 'First Photo',
  description: 'Very first photo in the DB',
  author_id: user3.id}
)
