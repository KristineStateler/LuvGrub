User.create!([
  {email: "krislarsonlarson10@outlook.com", encrypted_password: "$2a$11$M9IsxiLjmGbJIoAMDKCyp.FN9eL6IzSL1vmG3SdGrzHOyvn1PUOd.", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2018-05-18 20:35:50", last_sign_in_at: "2018-05-18 20:35:50", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", provider: "facebook", uid: "1691073940979585", name: "Kristine Stateler", image: "http://graph.facebook.com/v2.10/1691073940979585/picture"}
])
Preference.create!([
  {user_id: 1, recipe_id: 1}
])
Recipe.create!([
  {name: "Buffalo Chicken Flatbread", ingredients: "Chicken, Buffalo Sauce, Cilantro, Dough, Ranch, Cheese", steps: "Preheat oven to 350*, design pizza with desired ingredients, bake for 11-13 minutes", category: "American/Italian", user_id: 1, picture: "download__7_.jpeg"}
])
