Recipe.destroy_all
Procedure.destroy_all
Comment.destroy_all

brownie = Recipe.create!(
        name: "Brownie", 
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

procedure = Procedure.create!(
        title:"Brownie",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare erat, et rhoncus nulla. Vestibulum fringilla tortor elit, non rhoncus urna pellentesque a. Aenean enim mauris, mattis   at luctus vitae, iaculis in metus. Phasellus id vulputate massa. Vestibulum et ultrices orci, at imperdiet diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt enim non sem aliquet viverra. Nam faucibus diam mi, cursus facilisis erat consequat commodo. Curabitur fermentum et tortor a varius. Donec convallis ullamcorper nulla. Mauris sollicitudin, lorem ac consectetur lacinia, mauris massa vestibulum odio, a lacinia nunc leo nec lorem. Proin facilisis elit auctor enim porttitor lobortis.",
        photo_url:"https://i.imgur.com/6KxOaBw.jpg",
        recipe_id: brownie.id)

comment = Comment.create!(
        reviewer_name: "Ethan", 
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare erat, et rhoncus nulla. Vestibulum fringilla tortor elit, non rhoncus urna pellentesque a. Aenean enim mauris, mattis at luctus vitae, iaculis in metus. Phasellus id vulputate massa. Vestibulum et ultrices orci, at imperdiet diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt enim non sem aliquet viverra. Nam faucibus diam mi, cursus facilisis erat consequat commodo. Curabitur fermentum et tortor a varius. Donec convallis ullamcorper nulla. Mauris sollicitudin, lorem ac consectetur lacinia, mauris massa vestibulum odio, a lacinia nunc leo nec lorem. Proin facilisis elit auctor enim porttitor lobortis.", 
        recipe_id: brownie.id)
comment = Comment.create!(
        reviewer_name: "Bejoy", 
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare erat, et rhoncus nulla. Vestibulum fringilla tortor elit, non rhoncus urna pellentesque a. Aenean enim mauris, mattis at luctus vitae, iaculis in metus. Phasellus id vulputate massa. Vestibulum et ultrices orci, at imperdiet diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt enim non sem aliquet viverra. Nam faucibus diam mi, cursus facilisis erat consequat commodo. Curabitur fermentum et tortor a varius. Donec convallis ullamcorper nulla. Mauris sollicitudin, lorem ac consectetur lacinia, mauris massa vestibulum odio, a lacinia nunc leo nec lorem. Proin facilisis elit auctor enim porttitor lobortis.", 
        recipe_id: brownie.id)


cake = Recipe.create!(
        name: "Cake", 
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

procedure = Procedure.create!(
        title:"Cake",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare erat, et rhoncus nulla. Vestibulum fringilla tortor elit, non rhoncus urna pellentesque a. Aenean enim mauris, mattis   at luctus vitae, iaculis in metus. Phasellus id vulputate massa. Vestibulum et ultrices orci, at imperdiet diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt enim non sem aliquet viverra. Nam faucibus diam mi, cursus facilisis erat consequat commodo. Curabitur fermentum et tortor a varius. Donec convallis ullamcorper nulla. Mauris sollicitudin, lorem ac consectetur lacinia, mauris massa vestibulum odio, a lacinia nunc leo nec lorem. Proin facilisis elit auctor enim porttitor lobortis.",
        photo_url:"https://i.imgur.com/cZEImlQ.jpg",
        recipe_id: cake.id)

comment = Comment.create!(
        reviewer_name: "Joanna", 
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare erat, et rhoncus nulla. Vestibulum fringilla tortor elit, non rhoncus urna pellentesque a. Aenean enim mauris, mattis at luctus vitae, iaculis in metus. Phasellus id vulputate massa. Vestibulum et ultrices orci, at imperdiet diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt enim non sem aliquet viverra. Nam faucibus diam mi, cursus facilisis erat consequat commodo. Curabitur fermentum et tortor a varius. Donec convallis ullamcorper nulla. Mauris sollicitudin, lorem ac consectetur lacinia, mauris massa vestibulum odio, a lacinia nunc leo nec lorem. Proin facilisis elit auctor enim porttitor lobortis.", 
        recipe_id: cake.id)
comment = Comment.create!(
        reviewer_name: "Natania", 
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare erat, et rhoncus nulla. Vestibulum fringilla tortor elit, non rhoncus urna pellentesque a. Aenean enim mauris, mattis at luctus vitae, iaculis in metus. Phasellus id vulputate massa. Vestibulum et ultrices orci, at imperdiet diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt enim non sem aliquet viverra. Nam faucibus diam mi, cursus facilisis erat consequat commodo. Curabitur fermentum et tortor a varius. Donec convallis ullamcorper nulla. Mauris sollicitudin, lorem ac consectetur lacinia, mauris massa vestibulum odio, a lacinia nunc leo nec lorem. Proin facilisis elit auctor enim porttitor lobortis.", 
        recipe_id: cake.id)


puts "DB Seeded"