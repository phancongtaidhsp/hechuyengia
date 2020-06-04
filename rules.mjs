export const rules = `
milk('Meiji_số 1') :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_healthy).

milk('Morinaga Hagukumi số 1') :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Morinaga Hagukumi số 1') :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Morinaga Hagukumi số 1') :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Novalac số 2') :-
  age(six_months_to_one_year),
  origin(france),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Novalac số 2') :-
  age(six_months_to_one_year),
  origin(france),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Novalac số 2') :-
  age(six_months_to_one_year),
  origin(france),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Humana số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Humana số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Humana số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Humana số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Humana số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Humana số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Humana số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Nan pro số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance).

milk('Nan pro số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(support_digestive_system).

milk('Nan pro số 1') :-
  age(six_months_to_one_year),
  origin(germany),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance,support_digestive_system).

milk('Aptamil số 2') :-
  age(six_months_to_one_year),
  origin(germany),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Aptamil số 2') :-
  age(six_months_to_one_year),
  origin(germany),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Aptamil số 2') :-
  age(six_months_to_one_year),
  origin(germany),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Enfamil_A+') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Enfamil_A+') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('Enfamil_A+') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Similac neosure') :-
  age(six_months_to_one_year),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Similac neosure') :-
  age(six_months_to_one_year),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Similac neosure') :-
  age(six_months_to_one_year),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Enfamil A+ Gentle Care') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Enfamil A+ Gentle Care') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Enfamil A+ Gentle Care') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Enfamil LactoFree Care A+1') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Enfamil LactoFree Care A+1') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).
  
milk('Enfamil LactoFree Care A+1') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Enfamil LactoFree Care A+1') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Enfamil LactoFree Care A+1') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Enfamil LactoFree Care A+1') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Enfamil LactoFree Care A+1') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Enfamil A+2MFGM+DHA') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Enfamil A+2MFGM+DHA') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Enfamil A+2MFGM+DHA') :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Regestimil Lipil') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Regestimil Lipil') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Regestimil Lipil') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Regestimil Lipil') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Regestimil Lipil') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Regestimil Lipil') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Regestimil Lipil') :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Dielac Optimum Số2') :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Dielac Optimum Số2') :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('Dielac Optimum Số2') :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Dielac Optimum Số2') :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Dielac Optimum Số2') :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Dielac Optimum Số2') :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system,growth_vision).

milk('Dielac Optimum Số2') :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system,growth_vision).

milk('XO') :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('XO') :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('XO') :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('XO') :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('XO') :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('XO') :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('XO') :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('with mom số 2') :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('with mom số 2') :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('with mom số 2') :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('with mom số 2') :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_vision).

milk('with mom số 2') :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('with mom số 2') :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain).

milk('with mom số 2') :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain,growth_vision).

milk('Blemi Plus số 2') :-
  age(six_months_to_one_year),
  origin(spanish),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Blemi Plus số 2') :-
  age(six_months_to_one_year),
  origin(spanish),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Blemi Plus số 2') :-
  age(six_months_to_one_year),
  origin(spanish),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Blemi Plus số 2') :-
  age(six_months_to_one_year),
  origin(spanish),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Blemi Plus số 2') :-
  age(six_months_to_one_year),
  origin(spanish),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Blemi Plus số 2') :-
  age(six_months_to_one_year),
  origin(spanish),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Dê with mom số 2') :-
  age(six_months_to_one_year),
  origin(england),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).
  
milk('Dê with mom số 2') :-
  age(six_months_to_one_year),
  origin(england),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Dê with mom số 2') :-
  age(six_months_to_one_year),
  origin(england),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).
`;