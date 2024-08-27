const sharp = require("sharp")

const convertTograyscale = () => {

sharp("public/images/akira.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/akira.jpg')

sharp("public/images/2001_a_space_odyssey.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/2001_a_space_odyssey.jpg')
    
sharp("public/images/blade_runner.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/blade_runner.jpg')

sharp("public/images/bladerunner_2049.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/bladerunner_2049.jpg')

sharp("public/images/booksmart.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/booksmart.jpg')

sharp("public/images/bridesmaids.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/bridesmaids.jpg')

sharp("public/images/city_of_angels.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/city_of_angels.jpg')

sharp("public/images/good_boys.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/good_boys.jpg')

sharp("public/images/her.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/her.jpg')

sharp("public/images/Longlegs.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/Longlegs.jpg')

sharp("public/images/nightmare_on_elm.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/nightmare_on_elm.jpg')

sharp("public/images/palm_springs.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/palm_springs.jpg')

sharp("public/images/pearl_harbor.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/pearl_harbor.jpg')

sharp("public/images/search_party.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/search_party.jpg')

sharp("public/images/silence.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/silence.jpg')

sharp("public/images/superbad.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/superbad.jpg')

sharp("public/images/sweeney_todd.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/sweeney_todd.jpg')

sharp("public/images/sweet_november.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/sweet_november.jpg')

sharp("public/images/the_hangover.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/the_hangover.jpg')

sharp("public/images/the_invisible_man.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/the_invisible_man.jpg')

sharp("public/images/the_lake_house.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/the_lake_house.jpg')

sharp("public/images/the_matrix.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/the_matrix.jpg')

sharp("public/images/the_notebook.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/the_notebook.jpg')

sharp("public/images/the_thing.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/the_thing.jpg')

sharp("public/images/youve_got_mail.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/youve_got_mail.jpg')
sharp("public/images/9.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/9.jpg')

}

convertTograyscale()

// need to find out how to sign in to see page
// find out what the main box is to change picture while hovering over a movie
// figure out how to make images go to the images folder 
// find a faster way than having to put repeated code 