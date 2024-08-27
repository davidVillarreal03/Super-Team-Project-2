const sharp = require("sharp")

const convertTograyscale = () => {

sharp("public/images/akira.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_akira.jpg')

sharp("public/images/2001_a_space_odyssey.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_2001.jpg')
    
sharp("public/images/blade_runner.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_bladerunner.jpg')

sharp("public/images/bladerunner_2049.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_bladerunner2049.jpg')

sharp("public/images/booksmart.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_booksmart.jpg')

sharp("public/images/bridesmaids.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_bridesmaids.jpg')

sharp("public/images/city_of_angels.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_cityOfAngels.jpg')

sharp("public/images/good_boys.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_goodboys.jpg')

sharp("public/images/her.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_her.jpg')

sharp("public/images/Longlegs.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_longlegs.jpg')

sharp("public/images/nightmare_on_elm.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_nightmare.jpg')

sharp("public/images/palm_springs.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_palmsprings.jpg')

sharp("public/images/pearl_harbor.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_pearlharbor.jpg')

sharp("public/images/search_party.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_searchparty.jpg')

sharp("public/images/silence.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_silence.jpg')

sharp("public/images/superbad.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_superbad.jpg')

sharp("public/images/sweeney_todd.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_sweenerytodd.jpg')

sharp("public/images/sweet_november.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_sweetnovember.jpg')

sharp("public/images/the_hangover.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_thehangover.jpg')

sharp("public/images/the_invisible_man.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_invisibleman.jpg')

sharp("public/images/the_lake_house.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_lakehouse.jpg')

sharp("public/images/the_matrix.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_matix.jpg')

sharp("public/images/the_notebook.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_notebook.jpg')

sharp("public/images/the_thing.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_thing.jpg')

sharp("public/images/youve_got_mail.jpg")
    .grayscale()
    .toFile(__dirname + '/../images/processed/grayscale_gotmail.jpg')

}

convertTograyscale()

// need to find out how to sign in to see page
// find out what the main box is to change picture while hovering over a movie
// figure out how to make images go to the images folder 
// find a faster way than having to put repeated code 