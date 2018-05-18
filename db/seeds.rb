User.create!([
  {email: "krislarsonlarson10@outlook.com", password: "$2a$11$uF9y6qSC84o8m5XsghOgXeCwhLYtxmMaLSWdY9C/IAi8qSfCJZszi", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 44, current_sign_in_at: "2018-05-18 13:39:47", last_sign_in_at: "2018-05-17 20:14:08", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", provider: "facebook", uid: "1691073940979585", name: "Kristine Stateler", image: "http://graph.facebook.com/v2.10/1691073940979585/picture"}
])

Recipe.create!([
  {name: "Chocolate Cake", ingredients: "chocolate", steps: "eat chocolate", category: "cake", user_id: 1, picture: "Screenshot_2018-04-24_16.01.30.png"},
  {name: "dkfafd", ingredients: "fda", steps: "dfa", category: "da", user_id: 1, picture: "Screenshot_2018-04-24_16.01.30.png"},
  {name: "kd;fka", ingredients: "fsafd", steps: "fdsafda", category: "fdsada", user_id: 1, picture: "Tasty-Kitchen-Blog-Pizza-Nachos.jpg"}
])
Preference.create!([
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 3},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 3},
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 1, recipe_id: 3},
  {user_id: 1, recipe_id: 1}
])
