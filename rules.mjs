export const rules = `
milk(meiji1) :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_healthy).

milk(morinaga_Hagukumi_so1) :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(morinaga_Hagukumi_so1) :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(morinaga_Hagukumi_so1) :-
  age(six_months_to_one_year),
  origin(japan),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(novalac2) :-
  age(six_months_to_one_year),
  origin(france),
  price(four-hundred_to_five-hundred),
  netweight(eight-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(novalac2) :-
  age(six_months_to_one_year),
  origin(france),
  price(four-hundred_to_five-hundred),
  netweight(eight-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk(novalac2) :-
  age(six_months_to_one_year),
  origin(france),
  price(four-hundred_to_five-hundred),
  netweight(eight-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(growth_nerve_system).

milk(humana1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(humana1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(humana1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk(humana1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(humana1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(anti_constipation).

milk(humana1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones),
  functionality(anti_constipation).

milk(humana1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones),
  functionality(anti_constipation).

milk(nan_pro1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance).

milk(nan_pro1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(support_digestive_system).

milk(nan_pro1) :-
  age(six_months_to_one_year),
  origin(germany),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(increasing_resistance),
  functionality(support_digestive_system).

milk(aptamil_so2) :-
  age(six_months_to_one_year),
  origin(germany),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(aptamil_so2) :-
  age(six_months_to_one_year),
  origin(germany),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(aptamil_so2) :-
  age(six_months_to_one_year),
  origin(germany),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(enfamil_A+) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_brain).

milk(enfamil_A+) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk(enfamil_A+) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_brain),
  functionality(increase_immune_system).

milk(similac_neosure) :-
  age(six_months_to_one_year),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk(similac_neosure) :-
  age(six_months_to_one_year),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk(similac_neosure) :-
  age(six_months_to_one_year),
  origin(usa),
  price(four-hundred_to_five-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision),
  functionality(growth_brain).

milk(enfamil_A+_Gentle_Care) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(enfamil_A+_Gentle_Care) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).


milk(enfamil_A+_Gentle_Care) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(enfamil_LactoFre_Care_A+1) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(enfamil_LactoFre_Care_A+1) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).
  
milk(enfamil_LactoFre_Care_A+1) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk(enfamil_LactoFre_Care_A+1) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(enfamil_LactoFre_Care_A+1) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones),
  functionality(anti_constipation).

milk(enfamil_LactoFre_Care_A+1) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(anti_constipation).

milk(enfamil_LactoFre_Care_A+1) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones),
  functionality(anti_constipation).

milk(enfamil_A+2MFGM+DHA) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(enfamil_A+2MFGM+DHA) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(enfamil_A+2MFGM+DHA) :-
  age(six_months_to_one_year),
  origin(usa),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(regestimil_lipil) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(regestimil_lipil) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(regestimil_lipil) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk(regestimil_lipil) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(regestimil_lipil) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones),
  functionality(anti_constipation).

milk(regestimil_lipil) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(anti_constipation).

milk(regestimil_lipil) :-
  age(six_months_to_one_year),
  origin(usa),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones),
  functionality(anti_constipation).
  

milk(dielac_optimum2) :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).

milk(dielac_optimum2) :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk(dielac_optimum2) :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(increase_immune_system).

milk(dielac_optimum2) :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision),
  functionality(growth_brain).

milk(dielac_optimum2) :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain),
  functionality(increase_immune_system).

milk(dielac_optimum2) :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision),
  functionality(increase_immune_system).

  milk(dielac_optimum2) :-
  age(six_months_to_one_year),
  origin(vietnam),
  price(three-hundred_to_four-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision),
  functionality(growth_brain),
  functionality(increase_immune_system).

milk(xo) :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(xo) :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(xo) :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(anti_constipation).

milk(xo) :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(xo) :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones),
  functionality(anti_constipation).

milk(xo) :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(anti_constipation).

milk(xo) :-
  age(six_months_to_one_year),
  origin(korean),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones),
  functionality(anti_constipation).

milk(with_mom_so2) :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(with_mom_so2) :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision).
  
milk(with_mom_so2) :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_brain).

milk(with_mom_so2) :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(growth_vision).

milk(with_mom_so2) :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_vision),
  functionality(growth_brain).

milk(with_mom_so2) :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(growth_brain).

milk(with_mom_so2) :-
  age(six_months_to_one_year),
  origin(korean),
  price(six-hundred_to_seven-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(growth_vision),
  functionality(growth_brain).

milk(Blemi_Plus_so2) :-
  age(six_months_to_one_year),
  origin(spanish),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(Blemi_Plus_so2) :-
  age(six_months_to_one_year),
  origin(spanish),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(Blemi_Plus_so2) :-
  age(six_months_to_one_year),
  origin(spanish),
  price(two-hundred_to_three-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).

milk(Blemi_Plus_so2) :-
  age(six_months_to_one_year),
  origin(spanish),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).

milk(Blemi_Plus_so2) :-
  age(six_months_to_one_year),
  origin(spanish),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(growth_nerve_system).

milk(Blemi_Plus_so2) :-
  age(six_months_to_one_year),
  origin(spanish),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(growth_nerve_system).

milk(De_with_mom_so2) :-
  age(six_months_to_one_year),
  origin(england),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight).
  
milk(De_with_mom_so2) :-
  age(six_months_to_one_year),
  origin(england),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(building_healthy_bones).

milk(De_with_mom_so2) :-
  age(six_months_to_one_year),
  origin(england),
  price(five-hundred_to_six-hundred),
  kind_of_milk(powdered_milk),
  functionality(gain_weight),
  functionality(building_healthy_bones).
`;