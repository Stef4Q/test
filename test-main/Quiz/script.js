// The dictionary of options (in fact, a complex imbricate data structure):
// - each key represents a type of hobby, which has another dictionary assigned to it, with the following keys:
//      1. "hobbies" = an array of hobbies of that type
//      2. "questions" = an array of question patterns for the hobbies of that type
//      3. "answers" = an array of arrays, where each inner array contains the answer options for a certain questio pattern
// Mention: by "dictionary" here is meant a JavaScript associative array
hobbiesQuizDictionary = {
  "outdoor": {
      "hobbies": ["Amateur geology", "Amusement park visiting","Auto detailing", "Automobilism", "Astronomy", "Backpacking",  "BASE jumping","Beachcombing", "Beekeeping", "Birdwatching", "Blacksmithing","Bonsai", "Bus riding", "Camping",  "Car riding", "Dowsing", "dog training", "dog walking", "driving", "farming", "fishing","flower growing", "flying", "flying disc", "flying model planes", "Foraging ", "Fossicking", "Fruit picking", "gardening", "Geocaching", "Ghost hunting", "Gold prospecting", "Graffiti", "Groundhopping", "Guerrilla gardening",  "Herbalism", "Herping", "High-powered rocketry", "Hiking", "Hooping", "Hunting", "Lomography", "Longboarding", "Martial arts", "Metal detecting", "Motorcycling", "Meteorology",  "Mountain biking", "Mountaineering", "Museum visiting", "Mushroom Foraging", "Netball", "Noodling", "Nordicskating", "Orienteering",  "Photography", "Pickleball", "Picnicking", "Polo", "Powerlifting", "Public transport riding", "Qigong", "Radio-controlled model playing", "Rafting", "Railway journeys", "Rappelling", "Renaissance fair", "Renovating", "Rock painting", "Roller skating", "Safari", "Sailing", "Sand art", "Scouting", "Sculling or rowing", "Shopping", "Shuffleboard","Skimboarding", "Skydiving", "Slacklining", "Sledding", "Snorkeling","Snowshoeing", "Stone skipping", "Storm chasing", "Sun bathing","Survivalism",  "Tai chi", "Thru-hiking", "Topiary", "Tourism", "Trade fair visiting", "Travel", "Unicycling", "Urban exploration", "Vacation", "Vegetable farming", "Vehicle restoration", "Volunteering", "Walking", "going to the zoo", "model trains", "trainspotting","Model aircraft"],
      "questions": ["Do you like ", "How much do you do of ", "How long have you enjoyed doing ","Is there anything you do more than "],
      "answers": [["Favourite","A lot","Kind of-ish","A bit","Not at all"],
                    ["Wish I always did","Whenever I can","Weekly","Occasionally","From time to time"],
                    ["More than 5 years","1-5 years","6-12 months","Less than 6 months","Less than 1 month"],
                    ["No, never","Not really/Alongside","It depends","Kind of, yeah-ish","Yes, 100%"]]
    },
  "sports": {
      "hobbies" : ["Athletics","Air sports","Airsoft","Archery","Football","Australian rules football","Auto racing","Baseball", "Basketball","Badminton","Breakdancing", "BMX/MX", "Bodybuilding","Canoeing", "Canyoning","Climbing","Cornhole","Cricket","Croquet","Cycling","Disc golf","Dog sport","Equestrianism","Exhibition drill","Field hockey","Figure skating","F1", "Ice skating","Fishing","Fitness","Footbag", "Freestyle football","Frisbee","Golfing","Gymnastics","Motor sports", "Handball","Horseback riding","Horsemanship","Horseshoes","Iceboat racing","Jukskei","Knife throwing","Jogging", "Jumping rope", "Karting", "Kayaking", "Kite flying", "Kitesurfing", "Lacrosse","Longboarding","Long-distance running","Marching band","Mini Golf","Paintball", "Paragliding", "Parkour","Orienteering","Pickleball","Powerboat racing","Quidditch","Race walking","Racquetball","Radio-controlled car racing","Rugby","Sculling or rowing","Shooting sports","Skateboarding","Skiing","Softball","Speed skating","Squash","Scuba diving","Surfing","Swimming","Swimming", "Taekwondo","Table tennis","Tennis","Tennis polo","Tour skating",,"Triathlon","Ultimate frisbee","Volleyball","Water polo","Water sports","Road biking", "Rock climbing","Snowboarding", "Snowmobiling","Board sports (Chess)"],
      "questions": ["How much do you like ", "How much do you play ", "How long have you played or done ","Is there anything you play/do more than "],
      "answers": [["Favourite","A lot","Kind of-ish","A bit","Not at all"],
            ["Wish I always did","Whenever I can","Weekly","Occasionally","From time to time"],
            ["More than 5 years","1-5 years","6-12 months","Less than 6 months","Less than 1 month"],
            ["No, never","Not really/Alongside","It depends","Kind of, yeah-ish","Yes, 100%"]]
  },
  "series": {
      "hobbies" : ["Planet Earth ","Breaking Bad ","Band of Brothers ","Chernobyl ","The Wire ","Blue Planet II ","Our Planet ","Cosmos ","Avatar: The Last Airbender ","Cosmos ","The Sopranos ","Game of Thrones "," Rick and Morty "," The World at War "," The Last Dance "," Life "," Fullmetal Alchemist: Brotherhood "," Sherlock "," The Vietnam War "," Scam : The Harshad Mehta Story "," Arcane "," The Twilight Zone "," The Beatles: Get Back "," The Blue Planet "," Batman: The Animated Series "," Human Planet "," Firefly "," Frozen Planet "," Sahsiyet "," Clarkson's Farm "," Death Note "," Dekalog "," Attack on Titan "," True Detective "," The American Civil War "," Cowboy Bebop "," Hunter x Hunter "," Fargo "," The Office US "," When They See Us "," Africa "," Apocalypse: The Second World War "," Only Fools and Horses "," TVF Pitchers "," Last Week Tonight with John Oliver "," Gravity Falls "," Seinfeld "," Das Boot "," Nathan for You "," Monty Python's Flying Circus ","  "," Friends "," Pride and Prejudice "," Black Mirror "," Twin Peaks "," Over the Garden Wall "," Kota Factory "," Succession "," Fawlty Towers "," It's Always Sunny in Philadelphia "," Better Call Saul "," Blackadder Goes Forth "," Narcos "," Ted Lasso "," Freaks and Geeks "," Chappelle's Show "," The Mandalorian "," The West Wing "," Peaky Blinders "," Steins;Gate "," BoJack Horseman "," Dark "," Curb Your Enthusiasm "," Dragon Ball Z "," One Punch Man: Wanpanman "," Vinland Saga "," Rome "," Dragon Ball Z "," I"," Claudius "," Fleabag "," Oz "," Invincible "," Leyla ile Mecnun "," Arrested Development "," Six Feet Under "," The Adventures of Sherlock Holmes "," South Park "," Stranger Things "," The Marvelous Mrs. Maisel "," The Boys "," The Thick of It "," Battlestar Galactica "," Justice League Unlimited "," House of Cards "," Berserk "," House M.D. "," The Shield "," The Simpsons "," One Piece "," The Crown "," The Return of Sherlock Holmes "," Aspirants "," Line of Duty "," Mahabharat "," Downton Abbey "," The Grand Tour "," The Jinx: The Life and Deaths of Robert Durst "," Ramayan "," Star Trek: The Next Generation "," It's a Sin "," Deadwood "," Top Gear "," Atlanta "," Young Justice "," Lonesome Dove "," Haikyuu!! "," Mad Men "," Code Geass: Lelouch of the Rebellion "," The Bridge "," Dopesick "," Demon Slayer: Kimetsu no Yaiba "," Sarabhai V/S Sarabhai "," Formula : Drive to Survive "," Monster "," Yellowstone "," Blackadder II "," Peep Show "," The X Files "," Parks and Recreation "," Gomorrah "," Friday Night Lights "," Mindhunter "," Battlestar Galactica "," Anne "," Father Ted "," The Bureau "," Dexter "," Jujutsu Kaisen "," The Haunting of Hill House "," The Bugs Bunny Show "," Blackadder the Third "," Daredevil "," Westworld "," Gullak "," Panchayat "," This Is Us "," Archer "," The Queen's Gambit "," Crash Landing on You "," The Newsroom "," Yes Minister "," Yeh Meri Family "," Rurouni Kenshin: Trust and Betrayal "," Poirot "," Behzat Ç. an Ankara Detective Story "," QI "," The Family Man "," Through the Wormhole "," Justified "," What We Do in the Shadows "," Mr. Bean "," Naruto: Shippuden "," North & South "," Making a Murderer "," Justice League "," Spaced "," Neon Genesis Evangelion "," Samurai Champloo "," Boardwalk Empire "," From the Earth to the Moon "," The Eric Andre Show "," Mob Psycho  "," Long Way Round "," Pose "," Twin Peaks "," Adventure Time "," Dragon Ball "," Flight of the Conchords "," Dragon Ball "," Yes"," Prime Minister "," Mr. Robot "," The IT Crowd "," Letterkenny "," Cobra Kai "," Mystery Science Theatre  "," Senke nad Balkanom "," Detectorists "," Coupling "," Alfred Hitchcock Presents "," Brass Eye "," Endeavour "," Homicide: Life on the Street "," Fullmetal Alchemist "," Skam "," Mr Inbetween "," Silicon Valley "," Doctor Who "," The Expanse "," Ezel "," Impractical Jokers "," Louie "," Generation Kill "," Hannibal "," Spartacus: Gods of the Arena "," Shameless "," Samurai Jack "," The Office UK"," Chef's Table "," The Night Of "," Whose Line Is It Anyway? "," Sons of Anarchy "," I'm Alan Partridge "," Spartacus "," Shigatsu wa kimi no uso "," My Brilliant Friend "," Big Little Lies "," Black Books "," Mare of Easttown "," Boku dake ga inai machi "," Schitt's Creek "," The Defiant Ones "," John Adams "," Ethos "," Harley Quinn "," It's Okay to Not Be Okay "," Delhi Crime "," The Knick "," Dr. Horrible's Sing-Along Blog "," The Legend of Vox Machina "," Regular Show "," Inside No.  "," Unsere Mütter"," Community "," Love"," Death & Robots "," The New Batman Adventures "],
      "questions": ["How much do you like ", "How much do you watch ", "How long have you been watching or watched ","Is there any series you like more than ", "How often do you rewatch "],
      "answers": [["Favourite","A lot","Kind of-ish","A bit","Not at all"],
            ["Wish I always did","Whenever I can","Weekly","Occasionally","From time to time"],
            ["More than 5 years","1-5 years","6-12 months","Less than 6 months","Less than 1 month"],
            ["No, never","Not really/Alongside","It depends on my mood","Kind of, yeah-ish","Yes, 100%"],
            ["All the time","Occasionally","Whenever I feel like it but not too often","Never or very rarely","Never did"]]
  },
  "films": {
      "hobbies" : ["The Shawshank Redemption" , " The Godfather" , " The Godfather: Part II" , " The Dark Knight" , "  Angry Men" , " Schindler's List" , " The Lord of the Rings: The Return of the King" , " Pulp Fiction" , " The Good, the Bad and the Ugly" , " The Lord of the Rings: The Fellowship of the Ring" , " Fight Club" , " Forrest Gump" , " Inception" , " The Lord of the Rings: The Two Towers" , " Star Wars: Episode V - The Empire Strikes Back" , " The Matrix" , " Goodfellas" , " One Flew Over the Cuckoo's Nest" , " Seven Samurai" , " Seven" , " The Silence of the Lambs" , " City of God" , "1918", " Its a Wonderful Life" , " Life Is Beautiful" , " Saving Private Ryan" , " Star Wars: Episode IV - A New Hope" , " Interstellar" , " Spirited Away" , " The Green Mile" , " Spider-Man: No Way Home" , " Parasite" , " Leon" , " Harakiri" , " The Pianist" , " Terminator : Judgment Day" , " Back to the Future" , " The Lion King" , " The Usual Suspects" , " Psycho" , " Modern Times" , " Grave of the Fireflies" , " American History X" , " Whiplash" , " Gladiator" , " The Departed" , " City Lights" , " Untouchable" , " The Prestige" , " Casablanca" , " Once Upon a Time in the West" , " Rear Window" , " Cinema Paradiso" , " Alien" , " Apocalypse Now" , " Memento" , " Raiders of the Lost Ark" , " The Great Dictator" , " Django Unchained" , " The Lives of Others" , " Paths of Glory" , " Sunset Blvd" , " WALL·E" , " Avengers: Infinity War" , " Spider-Man: Into the Spider-Verse" , " Witness for the Prosecution" , " The Shining" , " Dr Strangelove or: How I Learned to Stop Worrying and Love the Bomb" , " Princess Mononoke" , " Oldboy" , " Joker" , " Your Name" , " Coco" , " The Dark Knight Rises" , " Aliens" , " Once Upon a Time in America" , " Avengers: Endgame" , " Capernaum" , " Das Boot" , " High and Low" , "  Idiots" , " Toy Story" , " Amadeus" , " American Beauty" , " Braveheart" , " Inglourious Basterds" , " Good Will Hunting" , " Hamilton" , " Come and See" , " Star Wars: Return of the Jedi" , " : A Space Odyssey" , " Reservoir Dogs" , " Like Stars on Earth" , " Vertigo" , " M" , " The Hunt" , " Citizen Kane" , " Singin in the Rain" , " Requiem for a Dream" , " North by Northwest" , " Ikiru" , " Eternal Sunshine of the Spotless Mind" , " Bicycle Thieves" , " Lawrence of Arabia" , " The Kid" , " Full Metal Jacket" , " Incendies" , " Dangal" , " The Apartment" , " Double Indemnity" , " Metropolis" , " A Clockwork Orange" , " Taxi Driver" , " The Father" , " The Sting" , " A Separation" , " Scarface" , " Snatch" , " " , " Amélie" , " To Kill a Mockingbird" , " Toy Story " , " For a Few Dollars More" , " Up" , " Pather Panchali" , " Indiana Jones and the Last Crusade" , " Heat" , " LA Confidential" , " Ran" , " Die Hard" , " Yojimbo" , " Green Book" , " Rashomon" , " Downfall" , " All About Eve" , " Monty Python and the Holy Grail" , " Some Like It Hot" , " Batman Begins" , " Unforgiven" , " Jai Bhim" , " Children of Heaven" , " Howls Moving Castle" , " The Wolf of Wall Street" , " Judgment at Nuremberg" , " There Will Be Blood" , " Casino" , " The Great Escape" , " The Treasure of the Sierra Madre" , " Pans Labyrinth" , " A Beautiful Mind" , " The Secret in Their Eyes" , " Raging Bull" , " Chinatown" , " My Neighbour Totoro" , " Shutter Island" , " Lock " , "Stock and Two Smoking Barrels" , " No Country for Old Men" , " Klaus" , " Dial M for Murder" , " The Thing" , " The Gold Rush" , " Three Billboards Outside Ebbing" , " Missouri" , " The Seventh Seal" , " The Elephant Man" , " The Sixth Sense" , " Jurassic Park" , " The Truman Show" , " Dersu Uzala" , " Wild Strawberries" , " The Third Man" , " Memories of Murder" , " V for Vendetta" , " Blade Runner" , " Trainspotting" , " Fargo" , " The Bridge on the River Kwai" , " Inside Out" , " Kill Bill: Vol " , " Finding Nemo" , " Warrior" , " Gone with the Wind" , " Tokyo Story" , " On the Waterfront" , " My Father and My Son" , " Prisoners" , " Wild Tales" , " The Grand Budapest Hotel" , " Stalker" , " The Deer Hunter" , " Gran Torino" , " The General" , " Persona" , " Sherlock Jr" , " Before Sunrise" , " Catch Me If You Can" , " Mary and Max" , " Mr Smith Goes to Washington" , " Barry Lyndon" , " In the Name of the Father" , " Hacksaw Ridge" , " Gone Girl" , " Room" , " Z" , " Andhadhun" , " The Passion of Joan of Arc" , " Le Mans " , " 12 Years a Slave" , " Dune" , " To Be or Not to Be" , " The Big Lebowski" , " Dead Poets Society" , " Harry Potter and the Deathly Hallows: Part 2" , " Ben-Hur" , " How to Train Your Dragon" , " Mad Max: Fury Road" , " Million Dollar Baby" , " Autumn Sonata" , " The Wages of Fear" , " Stand by Me" , " Network" , " The Handmaiden" , " Logan" , " Gangs of Wasseypur" , " La Haine" , " A Silent Voice" , " Hachi: A Dogs Tale" , " Cool Hand Luke" , " The  Blows" , " Platoon" , " Spotlight" , " Monsters Inc" , " Rebecca" , " In the Mood for Love" , " Life of Brian" , " The Bandit" , " Hotel Rwanda" , " Rush" , " Demon Slayer the Movie: Mugen Train" , " Rocky" , " Amores perros" , " Into the Wild" , " Nausicaä of the Valley of the Wind" , " Before Sunset" , " Drishyam" , " It Happened One Night" , " Miracle in Cell No " , " Nights of Cabiria" , " Neon Genesis Evangelion: The End of Evangelion" , " Andrei Rublev" , " The Battle of Algiers" , " Hera Pheri" ],
      "questions": ["How much do you like ", "How much do you watch ", "Should everyone watch ","Is there any film you like more than ", "How often do you rewatch "],
      "answers": [["Favourite","A lot","Kind of-ish","A bit","Not at all"],
            ["Wish I always did","Whenever I can","Monthly","From time to time","Never"],
            ["Yes it's a must!","Yes if they can","Potentially","Maybe, maybe not it depends","No"],
            ["No, never","Not really/Alongside","It depends on my mood","Kind of, yeah-ish","Yes, 100%"],
            ["All the time","Occasionally","Whenever I feel like it but not too often","Never or very rarely","Never did"]]
  },
  "indoor": {
      "hobbies" : ["Air hockey", " Animal fancy", " Axe throwing", " Backgammon", " Badminton", " Baking", " Ballet dancing", " Ballroom dancing", " Baton twirling", " Beauty pageants", " Billiards", " Bowling", " Boxing", " Cooking", " Bridge", " Checkers (draughts)", " Cheerleading", " Chess", " Color guard", " Cribbage", " Curling", " Dancing", " Darts", " Debate", " Dominoes", " Eating", " Esports", " Fencing", " Figure Skating", " Go", " Gymnastics", " Ice hockey", " Ice skating", " Judo", " Jujitsu", " Kabaddi", " Knowledge/word games", " Laser tag", " Magic", " Mahjong", " Marbles", " Martial arts", " Model racing", " Model United Nations", " Poker", " Pole dancing", " Pool", " Radio-controlled model playing", " Role-playing games", " Rughooking", " Shogi", " Slot car racing", " Speedcubing", " Sport stacking", " Table football", " Table tennis", " Volleyball", " Video gaming", " VR Gaming", " Weightlifting", " Wrestling", " Audiophile", " Fishkeeping", " Learning", " Meditation", " Microscopy", " Reading", " Research", " Shortwave listening", " Action figure", " Antiquing", " Ant-keeping", " Art collecting", " Book collecting", " Button collecting", " Cartophily (card collecting)", " Coin collecting", " Comic book collecting", " Compact discs", " Crystals", " Deltiology (postcard collecting)", " Die-cast toy", " Digital hoarding", " Dolls", " Element collecting", " Ephemera collecting", " Films", " Fingerprint collecting", " Fusilately (phonecard collecting)", " Knife collecting", " Lotology (lottery ticket collecting)", " Movie memorabilia collecting", " Perfume", " Philately", " Phillumeny", " Pin (lapel)", " plush collecting", " Radio-controlled model collecting", " Rail transport modelling", " Record collecting", " Rock tumbling", " Scutelliphily", " Shoes", " Slot car", " Sports memorabilia", " Stamp collecting", " Stuffed toy collecting", " Tea bag collecting", " Ticket collecting", " Transit map collecting", " Video game collecting", " Vintage cars", " Vintage clothing", " Vinyl Records", " Wikipedia editing"],
      "questions": ["How much do you like ", "Should everyone do ","Is there any indoor hobby you like more than ", "How often do you do "],
      "answers": [["Favourite","A lot","Kind of-ish","A bit","Not at all"],
            ["Yes it's a must!","Yes if they can","Potentially","Maybe, maybe not it depends","No"],
            ["No, never","Not really/Alongside","It depends on my mood","Kind of, yeah-ish","Yes, 100%"],
            ["All the time","Occasionally","Whenever I feel like it but not too often","Rarely from time to time","Never  really do it"]]
  },
  "educational": {
      "hobbies" : ["Archaeology" , "Astronomy" , "Animation" , "Aerospace" , "Biology" , "Botany" , "Business" , "Chemistry" , "English" , "Entrepreneurship" , "Geography" , "History" , "Linguistics" , "Literature" , "Mathematics" , "Medical" , "science" , "Microbiology" , "Mycology" , "Neuroscience" , "Philosophy" , "Physics" , "Psychology" , "Railway" , "studies" , "Research Science" , "technology studies" , "Social studies" , "Sociology" , "Sports science" , "Story Writing" , "Life" , "Science" , "Teaching" , "Web design", "Poetry", "Literature","Language Arts", "Health", "Handwriting", "Physical Education (P.E.)", "Art", "Music", "Instrumental Music – specific instrument", "Movement or Eurythmy", "Handwork or handcrafts", "Life Lab or gardening", "Dramatics", "Dance", "Spanish or other foreign language", "Leadership", "Special Education Day Class", "Resource Program", "Adaptive P.E.", "Occupational Therapy", "Middle School Subjects", "CORE – core subjects class", "Reading", "Language arts", "Speech and Debate", "English", "Algebra", "Life Science", "Earth Science", "Physical Science", "Health", "Social Studies", "Geography", "Ancient Civilizations", "Medieval and Renaissance", "U.S. History and Government", "French / Spanish / Latin", "Computer Science", "Art", "Economics", "Woodshop", "Metal Shop", "Business Technology", "Instrumental Music", "Band", "Choir", "Drama", "Physical Education", "Sports", "Special Education Day Class", "Resource Program", , "Occupational Therapy", "Art ", "Art Appreciation", "Art's History", "Drawing", "Painting", "Sculpture", "Ceramics", "Pottery", "Instrumental Music", "Music Appreciation", "Music History", "Music Theory", "Music Fundamentals", "Band", "Orchestra", "Choir", "Voice", "Classical Music Studies", "Performing Arts", "Theatre Arts", "Dance", "Computer Aided Design {Digital Media}", "Photography", "Videography", "History of Film", "Film Production", "Leather Working", "Drafting", "Metal Work", "Small Engine Mechanics", "Auto Mechanics", "General Science", "Physics", "Physical Science", "Chemistry", "Organic Chemistry", "Life Science", "Biology", "Zoology", "Marine Biology", "Botany", "Earth Science", "Geology", "Oceanography", "Meteorology", "Astronomy", "Animal Science", "Equine Science", "Veterinary Science", "Forensic Science", "Ecology", "Environmental Science", "Gardening", "Food Science"],
      "questions": ["How much do you enjoy doing ", "How much do you study or read ", "Should everyone do ","Is there any hobby you like more than ", "How often have you done "],
      "answers": [["Favourite","A lot","Kind of enjoy","A bit","Not at all"],
            ["Wish I always did","Whenever I can","Monthly","From time to time","Never"],
            ["Yes it's a must!","Yes if they can","Potentially, if they like it","Maybe, maybe not, it depends","No"],
            ["No, never","Not really/Alongside","It depends on my mood","Kind of, yeah-ish","Yes, 100%"],
            ["Since I can remeber","From a very young age","Recently but I've never liked anything more","A few years ago","Very recently"]]
  },
  "misc": {
      "hobbies" : ["3D printing"," Acroyoga" , " Acting" , " Animation" , " Anime" , " Aquascaping" , " Art" , " Astrology" , " Baking" , " Barbershop Music" , " Baton twirling" , " Beatboxing" , " Beer tasting" , " Bell ringing" , " Binge watching" , " Blogging" , " Board/tabletop games" , " Book discussion clubs" , " Book restoration" , " Bowling" , " Brazilian jiu-jitsu" , " Breadmaking" , " Bullet journaling" , " Calligraphy" , " Candle making" , " Candy making" , " Car Spotting" , " Car fixing & building" , " Card games" , " Cardistry" , " Ceramics" , " Chatting" , " Cheesemaking" , " Chess" , " Cleaning" , " Clothesmaking" , " Coffee roasting" , " Collecting" , " Coloring" , " Communication" , " Community activism" , " Computer programming" , " Confectionery" , " Conlanging" , " Construction" , " Cooking" , " Cosplaying" , " Couch surfing" , " Couponing" , " Craft" , " Creative writing" , " Crocheting" , " Cross-stitch" , " Crossword puzzles" , " Cryptography" , " Cue sports" , " Dance" , " Decorating" , " Digital arts" , " Dining" , " Diorama" , " Distro Hopping" , " Diving" , " Djembe" , " DJing" , " Do it yourself" , " Drama" , " Drawing" , " Drink mixing" , " Electronic games" , " Electronics" , " Embroidery" , " Engraving" , " Entertaining" , " Experimenting" , " Fantasy sports" , " Fashion" , " Fashion design" , " Feng shui decorating" , " Filmmaking" , " Fingerpainting" , " Fishfarming" , " Fishkeeping" , " Flower arranging" , " Fly tying" , " Foreign language learning" , " Furniture building" , " Gaming (tabletop games" , " role-playing games" , " Electronic games" , " Genealogy" , " Gingerbread house making" , " Giving advice" , " Glassblowing" , " Gardening" , " Gongfu tea" , " Graphic design" , " Gunsmithing" , " Hacking" , " Hardware" , " Herp keeping" , " Home improvement" , " Homebrewing" , " Houseplant care" , " Hula hooping" , " Humor" , " Hydrodipping" , " Hydroponics" , " Ice skating" , " Inventing" , " Jewelry making" , " Jigsaw puzzles" , " Journaling" , " Juggling" , " Karaoke" , " Karate" , " Kendama" , " Knife making" , " Knitting" , " Knot tying" , " Kombucha brewing" , " Kung fu" , " Lace making" , " Lapidary" , " Leather crafting" , " Lego building" , " Livestreaming" , " Listening to music" , " Listening to podcasts" , " Lock picking" , " Machining" , " Macrame" , " Magic" , " Makeup" , " Manga" , " Massaging" , " Mazes (indoor/outdoor)" , " Mechanics" , " Meditation" , " Memory training" , " Metalworking" , " Miniature art" , " Minimalism" , " Model building" , " Modeling" , " Model engineering" , " Music" , " Nail art" , " Needlepoint" , " Origami" , " Painting" , " Pen Spinning" , " Performance" , " Pet" , " Pet adoption & fostering" , " Pet sitting" , " Philately" , " Photography" , " Pilates" , " Planning" , " Plastic art" , " Playing musical instruments" , " Poetry" , " Poi" , " Pole dancing" , " Postcrossing" , " Pottery" , " Power Nap" , " Practical jokes" , " Pressed flower craft" , " Proofreading and editing" , " Proverbs" , " Public speaking" , " Puppetry" , " Puzzles" , " Pyrography" , " Quilling" , " Quilting" , " Quizzes" , " Radio-controlled model playing" , " Rail transport modeling" , " Rapping" , " Reading" , " Recipe creation" , " Refinishing" , " Reiki" , " Reviewing Gadgets" , " Robot combat" , " Rubiks Cube" , " Scrapbooking" , " Scuba Diving" , " Sculpting" , " Sewing" , " Shoemaking" , " Singing" , " Sketching" , " Skipping rope" , " Slot car" , " Soapmaking" , " Social media" , " Spreadsheets" , " Stamp collecting" , " Stand-up comedy" , " Storytelling" , " Stretching" , " Stripping" , " Sudoku" , " Talking" , " Tapestry" , " Tarot" , " Tatebanko or diorama" , " Tattooing" , " Taxidermy" , " Telling jokes" , " Thrifting" , " Upcycling" , " Video editing" , " Video game developing" , " Video gaming" , " Video making" , " VR Gaming" , " Wargaming" , " Watch making" , " Watching documentaries" , " Watching movies" , " Watching television" , " Wax sealing" , " Waxing" , " Weaving" , " Webtooning" , " Weight training" , " Welding" , " Whisky" , " Whittling" , " Wikipedia editing" , " Wine tasting" , " Winemaking" , " Witchcraft" , " Wood carving" , " Woodworking" , " Word searches" , " Worldbuilding" , " Writing" , " Writing music" , " Yo-yoing" , " Yoga" , " Zumba" ],
      "questions": ["How much do you enjoy doing ", "How much do you do ", "Should everyone do ","Is there any hobby you like more than ", "How often have you done "],
      "answers": [["Favourite","A lot","Kind of enjoy","A bit","Not at all"],
            ["Wish I always did","Whenever I can","Monthly","From time to time","Never"],
            ["Yes it's a must!","Yes if they can","Potentially, if they like it","Maybe, maybe not, it depends","No"],
            ["No, never","Not really/Alongside","It depends on my mood","Kind of, yeah-ish","Yes, 100%"],
            ["Since I can remeber","From a very young age","Recently but I've never liked anything more","A few years go","Very recently"]]
  },
  "gaming": {
      "hobbies" : ["The Oregon Trail" , "Pong" , "Zork" , "Space Invaders" , "Asteroids" , "Adventure" , "Missile Command" , "Pac-Man" , "Centipede" , "Defender" , "Donkey Kong" , "Frogger" , "Galaga" , "Tempest" , "Joust" , "Ms. Pac-Man" , "Pitfall!" , "Robotron: 2084" , "Lode Runner" , "Star Wars" , "Elite" , "Marble Madness" , "Tetris" , "Gauntlet" , "Ghosts 'n Goblins" , "Super Mario Bros." , "Bubble Bobble" , "The Legend of Zelda" , "Out Run" , "Contra" , "Double Dragon" , "Mike Tysons Punch-Out!!" , "R-Type" , "Mega Man 2" , "Ninja Gaiden" , "Super Mario Bros. 3" , "Prince of Persia" , "SimCity" , "The Secret of Monkey Island" , "Speedball 2: Brutal Deluxe" , "Super Mario World" , "Another World" , "Civilization" , "The Legend of Zelda: A Link to the Past" , "Lemmings" , "Monkey Island 2: LeChuck's Revenge" , "Sonic the Hedgehog" , "Street Fighter II" , "Dune II" , "Flashback" , "Mortal Kombat" , "Sonic the Hedgehog 2" , "Super Mario Kart" , "Virtua Racing" , "Wolfenstein 3D" , "Day of the Tentacle" , "Daytona USA" , "Doom" , "The Legend of Zelda: Link's Awakening" , "Mortal Kombat II" , "Myst" , "NBA Jam" , "Phantasy Star IV" , "Sam & Max Hit the Road" , "Secret of Mana" , "SimCity 2000" , "Star Fox" , "Syndicate" , "Donkey Kong Country" , "Doom II" , "EarthBound" , "Final Fantasy VI" , "Sega Rally Championship" , "Sensible World of Soccer" , "Star Wars: TIE Fighter" , "Super Metroid" , "X-COM: UFO Defense" , "Chrono Trigger" , "Command & Conquer" , "MechWarrior 2: 31st Century Combat" , "Warcraft II: Tides of Darkness" , "Wipeout" , "Yoshi's Island" , "Civilization II" , "Command & Conquer: Red Alert" , "Duke Nukem 3D" , "Nights into Dreams..." , "PaRappa the Rapper" , "Pokémon Red and Blue" , "Quake" , "Resident Evil" , "Super Mario 64" , "Tekken 3" , "Tomb Raider" , "Wave Race 64" , "Castlevania: Symphony of the Night" , "Diablo" , "Fallout" , "Final Fantasy Tactics" , "Final Fantasy VII" , "GoldenEye 007" , "Gran Turismo" , "Quake II" , "Star Fox 64" , "Star Wars Jedi Knight: Dark Forces II" , "Ultima Online" , "Dance Dance Revolution" , "Fallout 2" , "Grim Fandango" , "Half-Life" , "The Legend of Zelda: Ocarina of Time" , "Metal Gear Solid" , "Panzer Dragoon Saga" , "Resident Evil 2" , "Soulcalibur" , "StarCraft" , "Thief: The Dark Project" , "Age of Empires II" , "EverQuest" , "Homeworld" , "Planescape: Torment" , "Quake III: Arena" , "Shenmue" , "Silent Hill" , "System Shock 2" , "Unreal Tournament" , "Baldur's Gate II: Shadows of Amn" , "Counter-Strike" , "Deus Ex" , "Diablo II" , "Jet Set Radio" , "The Legend of Zelda: Majora's Mask" , "The Sims" , "Thief II: The Metal Age" , "Tony Hawk's Pro Skater 2" , "Advance Wars" , "Animal Crossing" , "Devil May Cry" , "Final Fantasy X" , "Gran Turismo 3: A-Spec" , "Grand Theft Auto III" , "Halo: Combat Evolved" , "Ico" , "Ikaruga" , "Max Payne" , "Metal Gear Solid 2: Sons of Liberty" , "Rez" , "Silent Hill 2" , "Super Smash Bros. Melee" , "The Elder Scrolls III: Morrowind" , "Grand Theft Auto: Vice City" , "Kingdom Hearts" , "The Legend of Zelda: The Wind Waker" , "Metroid Prime" , "Soulcalibur II" , "Tom Clancy's Splinter Cell" , "Beyond Good & Evil" , "Max Payne 2: The Fall of Max Payne" , "Prince of Persia: The Sands of Time" , "Star Wars: Knights of the Old Republic" , "WarioWare" , " Inc.: Mega Microgames!" , "Burnout 3: Takedown" , "Dragon Quest VIII" , "Grand Theft Auto: San Andreas" , "Half-Life 2" , "Halo 2" , "Katamari Damacy" , "Metal Gear Solid 3: Snake Eater" , "Rome: Total War" , "World of Warcraft" , "Civilization IV" , "Devil May Cry 3: Dante's Awakening" , "God of War" , "Guitar Hero" , "Psychonauts" , "Resident Evil 4" , "Shadow of the Colossus" , "Tom Clancy's Splinter Cell: Chaos Theory" , "Company of Heroes" , "The Elder Scrolls IV: Oblivion" , "Gears of War" , "Hitman: Blood Money" , "Ōkami" , "Wii Sports" , "BioShock" , "Call of Duty 4: Modern Warfare" , "God of War II" , "Halo 3" , "Mass Effect" , "Portal" , "Rock Band" , "Super Mario Galaxy" , "Team Fortress 2" , "Braid" , "Burnout Paradise" , "Dead Space" , "Fallout 3" , "Gears of War 2" , "Grand Theft Auto IV" , "Left 4 Dead" , "LittleBigPlanet" , "Persona 4" , "Rock Band 2" , "Spelunky" , "Street Fighter IV" , "Valkyria Chronicles" , "Angry Birds" , "Assassin's Creed II" , "Batman: Arkham Asylum" , "Bayonetta" , "Dragon Age: Origins" , "Left 4 Dead 2" , "Uncharted 2: Among Thieves" , "Limbo" , "Mass Effect 2" , "Red Dead Redemption" , "Rock Band 3" , "StarCraft II: Wings of Liberty" , "Super Mario Galaxy 2" , "Super Meat Boy" , "Batman: Arkham City" , "Dark Souls" , "The Elder Scrolls V: Skyrim" , "Minecraft" , "Portal 2" , "Dishonored" , "Journey" , "Hotline Miami" , "The Walking Dead" , "Dota 2" , "Grand Theft Auto V" , "The Last of Us" , "Destiny" , "Bloodborne" , "The Witcher III: Wild Hunt" , "Inside" , "Overwatch" , "The Legend of Zelda: Breath of the Wild" , "Rainbow 6" , "Fortnite" , "Madden" , "FIFA" ],
      "questions": ["How much do you enjoy playing ", "How much do you play ", "Should everyone play ","Is there any game you like more than ", "How often have you played "],
      "answers": [["Favourite","A lot","Kind of enjoy","A bit","Not at all"],
            ["Wish I always did","Whenever I can","Monthly","From time to time","Never"],
            ["Yes it's a must!","Yes if they can","Potentially, if they like it","Maybe, maybe not, it depends","No"],
            ["No, never","Not really/Alongside","It depends on my mood","Kind of, yeah-ish","Yes, 100%"],
            ["Since I can remeber","From a very young age","Recently but I've never liked anything more","A few years ago","Very recently"]]
  },
  "music": {
      "hobbies" : ["Pop","EDM","Dance","Hip Hop","Rap","Gospel","R and B","Latin","Rock","Metal","Country","Folk","Acoustic","Classical","Jazz","Blues","Easy Listening","New Age","Indie","Folk","Contemporary"],
      "questions": ["How much do you listen ", "How much do you listen to ", "Should everyone listen to ","Is there any type of music you like more than ", "How often have you listened to "],
      "answers": [["Favourite","A lot","Kind of enjoy","A bit","Not at all"],
            ["Wish I always did","Whenever I can","Daily","From time to time","Never"],
            ["Yes it's a must!","Yes if they can","Potentially, if they like it","Maybe, maybe not, it depends","No"],
            ["No, never","Not really/Alongside","It depends on my mood","Kind of, yeah-ish","Yes, 100%"],
            ["Since I can remeber","From a very young age","Recently but I've never liked anything more","A few years ago","Very recently"]]
  }
};
hobbyTypes = Object.keys(hobbiesQuizDictionary); //method returns the of a given object's own property names, such as "a" or "b" or "e"

console.log(hobbiesQuizDictionary);
console.log(hobbyTypes);

// Define all other necessary global variables
let allHobbies = [];
let allStrengths = [];

let hobbies = []; // stores the user's hobbies from their choices (for partial results)
let strengths = []; // stores the user's strengths for their hobbies (for partial results)

const answerScores = { a: 7, b: 5, c: 4, d: 3, e: 2 }; // this indicates what the strengths of each answer will be
const defaultNumberOfHobbies = 10; // how many hobbies will be sampled from each hobby type
let numberOfHobbies = defaultNumberOfHobbies; // the number of times the program will be looped through

let currentQuiz = 0; // creates global variable assigned to 0, to act as a 'count' of the number of the questions in the quiz
let currentQuestionPattern = 0; // this is very similiar to above but now, counts the index of the array questions to choose what questions will be outputted
let currentHobbyType = 0; // creates global variable assigned to 0, to act as a 'count' of the number of the hobby types

let hobbyType = hobbyTypes[currentHobbyType];

// Extract the handlers for the relevant elements in the quiz page
const quizEl = document.getElementById("quiz"); // method returns an element with a specified value, used to edit or read a html element, in this case manipulate quiz
const answerEls = document.querySelectorAll(".answer"); // selects all elements with class "answer" and then assigns to variable answerEls
const questionEl = document.getElementById("question"); // like the quiz variable but now for each specific question (explained more later)
const a_text = document.getElementById("a_text"); // method returns an element with a specified value, in this case the fact they chose 'a', used to read the html of the user input
const b_text = document.getElementById("b_text"); // like above but this time with the letter b instead (or second input of the list)
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");

const submitBtn = document.getElementById("submit"); // this takes the userinput of when they press the submit button and saves that

submitBtn.addEventListener("click", () => {
  // this attaches an event handler to the document, 'click[ing]' being the actual event (so clicking the sumbit button) and the function being what is below
  const answer = getSelected(); // function from earlier that takes the userinput from what they have selected
  if (answer) {
    // makes sure that its the answer that gets assigned this
    if (currentQuestionPattern == 0) {
      // if we are answering the first set of questions, the strengths array is empty, so we add all strengths in order
      strengths.splice(strengths.length, 0, answerScores[answer]);
    } else {
      // otherwise, we add our new score to the existing one (for the same hobby)
      strengths.splice(
        currentQuiz,
        1,
        strengths[currentQuiz] + answerScores[answer]
      );
      console.log(strengths);
    }

    currentQuiz++;

    var questions = hobbiesQuizDictionary[hobbyType]["questions"];
    var answers = hobbiesQuizDictionary[hobbyType]["answers"];

    if (currentQuiz < numberOfHobbies) {
      // as long as we still have questions left in our current quiz, load the current question
      loadQuiz(
        questions[currentQuestionPattern],
        answers[currentQuestionPattern],
        hobbies,
        currentQuiz
      );
    } else {
      // we got to the last question of the current question pattern
      if (currentQuestionPattern < questions.length - 1) {
        // as long as we did not get to the last question pattern, filter hobbies and continue with next question pattern
        sortHobbiesByStrenghts(strengths, hobbies);

        console.log(strengths);
        console.log(hobbies);

        highHobbiesAndStrenghts = getHobbiesWithHighStrengths(strengths, 4); // get the high hobbies and high strenghts in an array
        hobbies = highHobbiesAndStrenghts[0]; // the first element of that array is the high hobbies array => we set the global hobbies array to be equal to this new filtered array
        strengths = highHobbiesAndStrenghts[1]; // the second element of that array is the high strenghts array => we set the global strenghts array to be equal to this new filtered array
        if (hobbies.length > 0) {
          // if there are hobbies left after filtering
          currentQuestionPattern = currentQuestionPattern + 1; // we move on to the next question pattern
          currentQuiz = 0; // and start with the first quiz question of the new set of questions
          numberOfHobbies = hobbies.length; // the new number of hobbies is equal to the length of the filtered hobbies array

          console.log(strengths);
          console.log(hobbies);

          loadQuiz(
            questions[currentQuestionPattern],
            answers[currentQuestionPattern],
            hobbies,
            currentQuiz
          );
        } else {
          // if there are no hobbies left after filtering, there's no point in asking any more questions from this hobby type
          currentHobbyType = currentHobbyType + 1; // we move on to the next hobby type
          currentQuestionPattern = 0; // and we start with the first question pattern of new hobby type
          currentQuiz = 0; // and start with the first quiz question of the new set of questions
          numberOfHobbies = defaultNumberOfHobbies; // start with another batch of hobbies of the new hobby type

          hobbyType = hobbyTypes[currentHobbyType];
          quiz(
            hobbiesQuizDictionary[hobbyType]["hobbies"],
            hobbiesQuizDictionary[hobbyType]["questions"],
            hobbiesQuizDictionary[hobbyType]["answers"]
          );
        }
      } else {
        // as long as we did not get to the last hobby type, add and sort hobbies and continue with next hobby type
        if (currentHobbyType < hobbyTypes.length - 1) {
          var tempHobbies = allHobbies.concat(hobbies);
          var tempStrengths = allStrengths.concat(strengths);
          sortHobbiesByStrenghts(tempStrengths, tempHobbies);

          console.log(tempHobbies);
          console.log(tempStrengths);

          allHobbies = tempHobbies;
          allStrengths = tempStrengths;

          currentHobbyType = currentHobbyType + 1; // we move on to the next hobby type
          currentQuestionPattern = 0; // and we start with the first question pattern of new hobby type
          currentQuiz = 0; // and start with the first quiz question of the new set of questions
          numberOfHobbies = defaultNumberOfHobbies; // start with another batch of hobbies of the new hobby type

          hobbyType = hobbyTypes[currentHobbyType];
          quiz(
            hobbiesQuizDictionary[hobbyType]["hobbies"],
            hobbiesQuizDictionary[hobbyType]["questions"],
            hobbiesQuizDictionary[hobbyType]["answers"]
          );
        } else {
          // when we reach the last question of the last question pattern from the last type of hobby, the quiz is completed
          console.log(allHobbies);
          console.log(allStrengths);
          quizEl.innerHTML = `
                       <h2>You answered questions boss</h2>

                       <button onclick="location.reload()">Reload</button>
                       `;
        }
      }
    }
  } else {
    // if the user has not selected an answer, prompt them to pick one
    alert("Please pick an option!");
  }
});

// Call the quiz initialisation function
quiz(
  hobbiesQuizDictionary[hobbyType]["hobbies"],
  hobbiesQuizDictionary[hobbyType]["questions"],
  hobbiesQuizDictionary[hobbyType]["answers"]
);

// Function definitions:
function quiz(options, questions, answers) {
  hobbies = []; // reset global hobbies array
  strengths = []; // reset global strengths array

  while (hobbies.length < numberOfHobbies) {
    // as long as the list of hobbies has less than numberOfHobbies elements
    var j = Math.floor(Math.random() * options.length); // generate an index j (from options)
    if (!hobbies.includes(options[j])) {
      // check if that option was already selected
      hobbies.push(options[j]); // if we did not previusly add this hobby to our list, add it now
    }
  }

  console.log(hobbies);

  loadQuiz(
    questions[currentQuestionPattern],
    answers[currentQuestionPattern],
    hobbies,
    currentQuiz
  ); //whilst this still takes in four paremeters, when taking in the questions and answers for the questions/answers array, it look at the currentQuestionPattern to decide which one it chooses
}

function loadQuiz(ques, ans, array3, pointer) {
  deselectAnswers();

  questionEl.innerText = ques + array3[pointer] + "?";
  a_text.innerText = ans[0];
  b_text.innerText = ans[1];
  c_text.innerText = ans[2];
  d_text.innerText = ans[3];
  e_text.innerText = ans[4];
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function sortHobbiesByStrenghts(array, array2) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        var tmp2 = array2[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
        array2[i - 1] = array2[i];
        array2[i] = tmp2;
      }
    }
  }

  return array;
}

function getHobbiesWithHighStrengths(arr, threshold) {
  const highStrengths = [];
  const highHobbies = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) {
      highStrengths.push(arr[i]);
      highHobbies.push(hobbies[i]);
    }
  }
  return [highHobbies, highStrengths]; // return both hobbies and strengths as an array (in fact, an array of arrays)
}
