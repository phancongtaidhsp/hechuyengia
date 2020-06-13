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

milk('Meadow Fresh'):-
  age(six_months_to_one_year),
  origin(newzealand),
  price(four-hundred_to_five-hundred),
  functionality(building_healthy_bones).
  
milk('Breton'):-
  age(six_months_to_one_year),
  origin(france),
  price(five-hundred_to_six-hundred),
  functionality(gain_weight).

milk('Breton'):-
  age(six_months_to_one_year),
  origin(france),
  price(five-hundred_to_six-hundred),
  functionality(growth_brain).

milk('Breton'):-
  age(six_months_to_one_year),
  origin(france),
  price(five-hundred_to_six-hundred),
  functionality(gain_weight,growth_brain).
  
milk('Devondale'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(gain_height).

milk('Devondale'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(growth_vision).

milk('Devondale'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(gain_height,growth_vision).
  
milk('Australia’s Own'):-
  age(six_months_to_one_year),
  origin(australia),
  price(four-hundred_to_five-hundred),
  functionality(building_healthy_bones).
  
milk('Promess'):-
  age(six_months_to_one_year),
  origin(france),
  price(three-hundred_to_four-hundred),
  functionality(increasing_resistance).

milk('Promess'):-
  age(six_months_to_one_year),
  origin(france),
  price(three-hundred_to_four-hundred),
  functionality(support_digestive_system).

milk('Promess'):-
  age(six_months_to_one_year),
  origin(france),
  price(three-hundred_to_four-hundred),
  functionality(increasing_resistance,support_digestive_system).
  
milk('Vinamilk'):-
  age(six_months_to_one_year),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  functionality(gain_weight).

milk('Vinamilk'):-
  age(six_months_to_one_year),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  functionality(growth_height).

milk('Vinamilk'):-
  age(six_months_to_one_year),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  functionality(gain_weight,growth_height).
  
milk('Royal_Miller'):-
  age(six_months_to_one_year),
  origin(germany),
  price(four-hundred_to_five-hundred),
  functionality(growth_height).

milk('Royal_Miller'):-
  age(six_months_to_one_year),
  origin(germany),
  price(four-hundred_to_five-hundred),
  functionality(growth_brain).

milk('Royal_Miller'):-
  age(six_months_to_one_year),
  origin(germany),
  price(four-hundred_to_five-hundred),
  functionality(growth_height,growth_brain).
  
milk('Lemontree_Dairy'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(growth_brain).

milk('Lemontree_Dairy'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(growth_vision).

milk('Lemontree_Dairy'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(growth_brain,growth_vision).
  
milk('Anchor'):-
  age(six_months_to_one_year),
  origin(newzealand),
  price(two-hundred_to_three-hundred),
  functionality(gain_weight).

milk('Anchor'):-
  age(six_months_to_one_year),
  origin(newzealand),
  price(two-hundred_to_three-hundred),
  functionality(building_healthy_bones).

milk('Anchor'):-
  age(six_months_to_one_year),
  origin(newzealand),
  price(two-hundred_to_three-hundred),
  functionality(gain_weight,building_healthy_bones).
  
milk('DJA'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(gain_weight).

milk('DJA'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(building_healthy_bones).

milk('DJA'):-
  age(six_months_to_one_year),
  origin(australia),
  price(three-hundred_to_four-hundred),
  functionality(gain_weight,building_healthy_bones).
  
milk('Lait'):-
  age(six_months_to_one_year),
  origin(france),
  price(five-hundred_to_six-hundred),
  functionality(gain_weight).

milk('Lait'):-
  age(six_months_to_one_year),
  origin(france),
  price(five-hundred_to_six-hundred),
  functionality(building_healthy_bones).

milk('Lait'):-
  age(six_months_to_one_year),
  origin(france),
  price(five-hundred_to_six-hundred),
  functionality(gain_weight,building_healthy_bones).

milk('Wakodo Haihai 1') :-
  age(six_months),
  origin(japan),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Wakodo Haihai 1') :-
  age(six_months),
  origin(japan),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Wakodo Haihai 1') :-
  age(six_months),
  origin(japan),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Glico Icreo 0') :-
  age(six_months),
  origin(japan),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Glico Icreo 0') :-
  age(six_months),
  origin(japan),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Glico Icreo 0') :-
  age(six_months),
  origin(japan),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Morinaga 2') :-
  age(six_months),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Morinaga 2') :-
  age(six_months),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Morinaga 2') :-
  age(six_months),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Morinaga 2') :-
  age(six_months),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Morinaga 2') :-
  age(six_months),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Morinaga 2') :-
  age(six_months),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Morinaga 2') :-
  age(six_months),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Morinaga 0') :-
  age(six_months),
  origin(japan),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance).

milk('Morinaga 0') :-
  age(six_months),
  origin(japan),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(support_digestive_system).

milk('Morinaga 0') :-
  age(six_months),
  origin(japan),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance,support_digestive_system).

milk('Meiji 0') :-
  age(six_months),
  origin(japan),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Meiji 0') :-
  age(six_months),
  origin(japan),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Meiji 0') :-
  age(six_months),
  origin(japan),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Olla 3') :-
  age(six_months),
  origin(holland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Olla 3') :-
  age(six_months),
  origin(holland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('Olla 3') :-
  age(six_months),
  origin(holland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Olla 2') :-
  age(six_months),
  origin(holland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Olla 2') :-
  age(six_months),
  origin(holland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Olla 2') :-
  age(six_months),
  origin(holland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('HOLLANDIA STREET') :-
  age(six_months),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('HOLLANDIA STREET') :-
  age(six_months),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('HOLLANDIA STREET') :-
  age(six_months),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Olla 1') :-
  age(six_months),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Olla 1') :-
  age(six_months),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Olla 1') :-
  age(six_months),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Olla 1') :-
  age(six_months),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Olla 1') :-
  age(six_months),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Olla 1') :-
  age(six_months),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Olla 1') :-
  age(six_months),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Frisolac Gold 1') :-
  age(six_months),
  origin(holland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Frisolac Gold 1') :-
  age(six_months),
  origin(holland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Frisolac Gold 1') :-
  age(six_months),
  origin(holland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Natumil') :-
  age(six_months),
  origin(switzerland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Natumil') :-
  age(six_months),
  origin(switzerland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Natumil') :-
  age(six_months),
  origin(switzerland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Natumil') :-
  age(six_months),
  origin(switzerland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Natumil') :-
  age(six_months),
  origin(switzerland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Natumil') :-
  age(six_months),
  origin(switzerland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Natumil') :-
  age(six_months),
  origin(switzerland),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Vinlac') :-
  age(six_months),
  origin(switzerland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Vinlac') :-
  age(six_months),
  origin(switzerland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('Vinlac') :-
  age(six_months),
  origin(switzerland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Vinlac') :-
  age(six_months),
  origin(switzerland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Vinlac') :-
  age(six_months),
  origin(switzerland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Vinlac') :-
  age(six_months),
  origin(switzerland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system,growth_vision).

milk('Vinlac') :-
  age(six_months),
  origin(switzerland),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system,growth_vision).

milk('Nutren junior') :-
  age(six_months),
  origin(switzerland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Nutren junior') :-
  age(six_months),
  origin(switzerland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Nutren junior') :-
  age(six_months),
  origin(switzerland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Dielac Alpha Gold 1') :-
  age(six_months),
  origin(switzerland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Dielac Alpha Gold 1') :-
  age(six_months),
  origin(switzerland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Dielac Alpha Gold 1') :-
  age(six_months),
  origin(switzerland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Dielac Alpha Gold 1') :-
  age(six_months),
  origin(switzerland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Dielac Alpha Gold 1') :-
  age(six_months),
  origin(switzerland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Dielac Alpha Gold 1') :-
  age(six_months),
  origin(switzerland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Dielac Alpha Gold 1') :-
  age(six_months),
  origin(switzerland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Nan 1') :-
  age(six_months),
  origin(switzerland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Nan 1') :-
  age(six_months),
  origin(switzerland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Nan 1') :-
  age(six_months),
  origin(switzerland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Nan 1') :-
  age(six_months),
  origin(switzerland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Nan 1') :-
  age(six_months),
  origin(switzerland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Nan 1') :-
  age(six_months),
  origin(switzerland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Nan 1') :-
  age(six_months),
  origin(switzerland),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Similac IQ') :-
  age(six_months),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Similac IQ') :-
  age(six_months),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Similac IQ') :-
  age(six_months),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Similac IQ') :-
  age(six_months),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_vision).

milk('Similac IQ') :-
  age(six_months),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Similac IQ') :-
  age(six_months),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain).

milk('Similac IQ') :-
  age(six_months),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_vision,growth_brain).

milk('Abbott Grow') :-
  age(six_months),
  origin(usa),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Abbott Grow') :-
  age(six_months),
  origin(usa),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Abbott Grow') :-
  age(six_months),
  origin(usa),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Abbott Grow') :-
  age(six_months),
  origin(usa),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Abbott Grow') :-
  age(six_months),
  origin(usa),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,growth_brain).

milk('Abbott Grow') :-
  age(six_months),
  origin(usa),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain).

milk('Abbott Grow') :-
  age(six_months),
  origin(usa),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,growth_brain).

milk('Enfamil A+') :-
  age(six_months),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Enfamil A+') :-
  age(six_months),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('Enfamil A+') :-
  age(six_months),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Enfamil A+') :-
  age(six_months),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Enfamil A+') :-
  age(six_months),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Enfamil A+') :-
  age(six_months),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system,growth_vision).

milk('Enfamil A+') :-
  age(six_months),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system,growth_vision).

milk('Similac 2') :-
  age(six_months),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Similac 2') :-
  age(six_months),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Similac 2') :-
  age(six_months),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Similac 2') :-
  age(six_months),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Similac 2') :-
  age(six_months),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Similac 2') :-
  age(six_months),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Similac 2') :-
  age(six_months),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Similac 1') :-
  age(six_months),
  origin(usa),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Similac 1') :-
  age(six_months),
  origin(usa),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Similac 1') :-
  age(six_months),
  origin(usa),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Blackmores Newborn Formula 1') :-
  age(six_months),
  origin(australia),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Blackmores Newborn Formula 1') :-
  age(six_months),
  origin(australia),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Blackmores Newborn Formula 1') :-
  age(six_months),
  origin(australia),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Blackmores Newborn Formula 1') :-
  age(six_months),
  origin(australia),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_vision).

milk('Blackmores Newborn Formula 1') :-
  age(six_months),
  origin(australia),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Blackmores Newborn Formula 1') :-
  age(six_months),
  origin(australia),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain).

milk('Blackmores Newborn Formula 1') :-
  age(six_months),
  origin(australia),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain,growth_vision).

milk('Premium Gold 1') :-
  age(six_months),
  origin(australia),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Premium Gold 1') :-
  age(six_months),
  origin(australia),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Premium Gold 1') :-
  age(six_months),
  origin(australia),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Aptamil 1') :-
  age(six_months),
  origin(australia),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Aptamil 1') :-
  age(six_months),
  origin(australia),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Aptamil 1') :-
  age(six_months),
  origin(australia),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('S26 2') :-
  age(six_months),
  origin(australia),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance).

milk('S26 2') :-
  age(six_months),
  origin(australia),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(support_digestive_system).

milk('S26 2') :-
  age(six_months),
  origin(australia),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance,support_digestive_system).

milk('S-26 1') :-
  age(six_months),
  origin(australia),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('S-26 1') :-
  age(six_months),
  origin(australia),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('S-26 1') :-
  age(six_months),
  origin(australia),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Nestle high calcium') :-
  age(six_months),
  origin(thailand),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Nestle high calcium') :-
  age(six_months),
  origin(thailand),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Nestle high calcium') :-
  age(six_months),
  origin(thailand),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Nestle high calcium') :-
  age(six_months),
  origin(thailand),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Nestle high calcium') :-
  age(six_months),
  origin(thailand),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Nestle high calcium') :-
  age(six_months),
  origin(thailand),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Nestle high calcium') :-
  age(six_months),
  origin(thailand),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Hi-Q super Gold') :-
  age(six_months),
  origin(thailand),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance).

milk('Hi-Q super Gold') :-
  age(six_months),
  origin(thailand),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(support_digestive_system).

milk('Hi-Q super Gold') :-
  age(six_months),
  origin(thailand),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance,support_digestive_system).

milk('Enfa số 3') :-
  age(six_months),
  origin(thailand),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Enfa số 3') :-
  age(six_months),
  origin(thailand),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('Enfa số 3') :-
  age(six_months),
  origin(thailand),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Pediasure') :-
  age(six_months),
  origin(thailand),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Pediasure') :-
  age(six_months),
  origin(thailand),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Pediasure') :-
  age(six_months),
  origin(thailand),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('S26 3') :-
  age(six_months),
  origin(thailand),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('S26 3') :-
  age(six_months),
  origin(thailand),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('S26 3') :-
  age(six_months),
  origin(thailand),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Riso Opti Gold') :-
  age(six_months),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Riso Opti Gold') :-
  age(six_months),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Riso Opti Gold') :-
  age(six_months),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Riso Opti Gold') :-
  age(six_months),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Riso Opti Gold') :-
  age(six_months),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Riso Opti Gold') :-
  age(six_months),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Riso Opti Gold') :-
  age(six_months),
  origin(vietnam),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Pediacare Gold') :-
  age(six_months),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Pediacare Gold') :-
  age(six_months),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Pediacare Gold') :-
  age(six_months),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Dutch Lady') :-
  age(six_months),
  origin(vietnam),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Dutch Lady') :-
  age(six_months),
  origin(vietnam),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Dutch Lady') :-
  age(six_months),
  origin(vietnam),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Dielac Alpha Step 1') :-
  age(six_months),
  origin(vietnam),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Dielac Alpha Step 1') :-
  age(six_months),
  origin(vietnam),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Dielac Alpha Step 1') :-
  age(six_months),
  origin(vietnam),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Dielac Alpha Step 1') :-
  age(six_months),
  origin(vietnam),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Dielac Alpha Step 1') :-
  age(six_months),
  origin(vietnam),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Dielac Alpha Step 1') :-
  age(six_months),
  origin(vietnam),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Dielac Alpha Step 1') :-
  age(six_months),
  origin(vietnam),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Optimum Gold 1') :-
  age(six_months),
  origin(vietnam),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Optimum Gold 1') :-
  age(six_months),
  origin(vietnam),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Optimum Gold 1') :-
  age(six_months),
  origin(vietnam),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Grow Calcium') :-
  age(six_months),
  origin(canada),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Grow Calcium') :-
  age(six_months),
  origin(canada),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk('Grow Calcium') :-
  age(six_months),
  origin(canada),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Grow Calcium') :-
  age(six_months),
  origin(canada),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Grow Calcium') :-
  age(six_months),
  origin(canada),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system).

milk('Grow Calcium') :-
  age(six_months),
  origin(canada),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system,growth_vision).

milk('Grow Calcium') :-
  age(six_months),
  origin(canada),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,increase_immune_system,growth_vision).

milk('Grow Omega') :-
  age(six_months),
  origin(canada),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Grow Omega') :-
  age(six_months),
  origin(canada),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Grow Omega') :-
  age(six_months),
  origin(canada),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Grow Omega') :-
  age(six_months),
  origin(canada),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Grow Omega') :-
  age(six_months),
  origin(canada),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,anti_constipation).

milk('Grow Omega') :-
  age(six_months),
  origin(canada),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Grow Omega') :-
  age(six_months),
  origin(canada),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,anti_constipation).

milk('Similac Go') :-
  age(six_months),
  origin(canada),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Similac Go') :-
  age(six_months),
  origin(canada),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Similac Go') :-
  age(six_months),
  origin(canada),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk('Similac Go') :-
  age(six_months),
  origin(canada),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_vision).

milk('Similac Go') :-
  age(six_months),
  origin(canada),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain,growth_vision).

milk('Similac Go') :-
  age(six_months),
  origin(canada),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain).

milk('Similac Go') :-
  age(six_months),
  origin(canada),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_brain,growth_vision).

milk('Good start') :-
  age(six_months),
  origin(canada),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

  milk('Good start') :-
  age(six_months),
  origin(canada),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

  milk('Good start') :-
  age(six_months),
  origin(canada),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Enfagrow A+') :-
  age(six_months),
  origin(canada),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Enfagrow A+') :-
  age(six_months),
  origin(canada),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Enfagrow A+') :-
  age(six_months),
  origin(canada),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Meiji_so9') :-
  age(greater_two_years),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Meiji_so9') :-
  age(greater_two_years),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Meiji_so9') :-
  age(greater_two_years),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Meiji_so9') :-
  age(greater_two_years),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Meiji_so9') :-
  age(greater_two_years),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain-building_healthy_bones,growth_nerve_system).

milk('Meiji_so9') :-
  age(greater_two_years),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Meiji_so9') :-
  age(greater_two_years),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,growth_nerve_system).

milk('Morinaga_so9') :-
  age(greater_two_years),
  origin(japan),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Morinaga_so9') :-
  age(greater_two_years),
  origin(japan),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Morinaga_so9') :-
  age(greater_two_years),
  origin(japan),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Star_Gold_so4') :-
  age(greater_two_years),
  origin(korea),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Star_Gold_so4') :-
  age(greater_two_years),
  origin(korea),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Star_Gold_so4') :-
  age(greater_two_years),
  origin(korea),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Star_Gold_so4') :-
  age(greater_two_years),
  origin(korea),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Star_Gold_so4') :-
  age(greater_two_years),
  origin(korea),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,growth_nerve_system).

milk('Star_Gold_so4') :-
  age(greater_two_years),
  origin(korea),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Star_Gold_so4') :-
  age(greater_two_years),
  origin(korea),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,growth_nerve_system).

milk('Friso_Gold_Pedia') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Friso_Gold_Pedia') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Friso_Gold_Pedia') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Friso_Gold_Pedia') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Friso_Gold_Pedia') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,growth_nerve_system).

milk('Friso_Gold_Pedia') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Friso_Gold_Pedia') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,growth_nerve_system).

milk('Dielac_Grow_Plus_2+') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Dielac_Grow_Plus_2+') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Dielac_Grow_Plus_2+') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Dielac_Grow_Plus_2+') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Dielac_Grow_Plus_2+') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,growth_nerve_system).

milk('Dielac_Grow_Plus_2+') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Dielac_Grow_Plus_2+') :-
  age(greater_two_years),
  origin(holland),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,growth_nerve_system).

milk('Kid_Essentials') :-
  age(greater_two_years),
  origin(australia),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Kid_Essentials') :-
  age(greater_two_years),
  origin(australia),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk('Kid_Essentials') :-
  age(greater_two_years),
  origin(australia),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,anti_constipation).

milk('Kidsure') :-
  age(greater_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Kidsure') :-
  age(greater_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Kidsure') :-
  age(greater_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Kidsure') :-
  age(greater_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Kidsure') :-
  age(greater_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones,growth_nerve_system).

milk('Kidsure') :-
  age(greater_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,growth_nerve_system).

milk('Kidsure') :-
  age(greater_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones,growth_nerve_system).

milk('Royal_Ausnz_Premium_Gold_3_Todder_Milk_Drink') :-
  age(one_year_to_two_years),
  origin(australia),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk('Aptamil_Toddler_Gold+_3') :-
  age(one_year_to_two_years),
  origin(england),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Frisolac_Gold_3') :-
  age(one_year_to_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk('Frisolac_Gold_3') :-
  age(one_year_to_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk('Frisolac_Gold_3') :-
  age(one_year_to_two_years),
  origin(holland),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight,building_healthy_bones).

milk('Similac_IQ_Plus_số_3') :-
  age(one_year_to_two_years),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Physiolac_3') :-
  age(one_year_to_two_years),
  origin(france),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_healthy).

milk('Dielac_Grow_Pro') :-
  age(one_year_to_two_years),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk('Milex') :-
  age(one_year_to_two_years),
  origin(denmark),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

`;