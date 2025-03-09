# What parts of the game are fun that I want to focus on

Choosing what to 'invest' in on earlier turns should have an impact on later turns, e.g., what adult type you tell a larva to develop into, how much honey you store for winter, the layout of your hive, whether you aggress your neighbours early or late. Much of the fun of strategy is in out-witting your adversaries, whether by surprising them with unpredicted play, using social skills to make alliances of convenience and betrayal, or responding to their tactic with a complementary one (e.g. seeing an investment in cavalry and countering it with something that's good against cavalry). Building too big a hive could deplete resources and lead to collapse, but there's also competition to consider, you need enough bees to attack/defend yourself and build sufficient stores for winter.

I really enjoy the set-up phase of AoE games, i.e. the bit where you try to build your economy as quickly as you can, and when you start to explore the terrain and discover particular resources by luck.

# Map and space

I'm inspired by Battle for Wesnoth that we don't actually need things to all be the correct scale - in that game, individual people take up the same amount of space as villages and forests! So we could have e.g. flowers/trees take up the same amount of 'board' space as individual hexes in a honeycomb. Though that might be a too-extreme example; possibly instead your hive is a link to a different map, which is hidden from the adversary in terms of fog-of-war.

I like the idea of skewing the hex map somewhat (left-right and also squish top-down), taking us from birds-eye-view a la Battle for Wesnoth to 2.5-D a la Age of Empires (though I think AoE doesn't have left-right skew?). If the skew is draggable by right-click we could even have the viewer look at the map from a variety of 'angles'! Sprites such as bees or trees would not need to be rotated / skewed in that case; only terrain would.

Could be a pleasant halfway point between AoE2 and Wesnoth by having the hex tiles be relatively small and out-of-the-way (borders not overly visible)

## Scale and how will hives be represented visually

Hives need to have openings which players can try to tactically make wider (to allow more resources or ventilation in) or narrower (to make robbing harder or temperature higher), and allocate guards to; and they need to have holes develop, which propolis is used to seal, and through which enemy robbers can sneak.

This suggests a relatively ZOOMED-IN visual representation of the hive, since the low-level details matter. I think this could be done nicely by having two separate maps: the large map for the world, and a blown-up map of the hive and its immediate surrounds. The blown-up map of the hive should have sufficient space for expanding the hive and for waggle-dances to be performed (these are done internally).

This lets us use fairly appropriately different scales, since bees do fly for miles; perhaps the whole large map should be like 5 miles across.

I imagine animations representing bee travel that move pretty slowly across the 'board' since they are travelling a long distance irl.

## Intra-hive map

Note that hives, including wild ones, tend to store honey at the top and broods at the bottom.

# Resources

Maybe use the noun 'forage' instead, as an aggregate noun. "There is some forage over there", "not enough forage"

## Resource usage

I like the way in Wesnoth maintaining an army is a continuous draw on resources (unlike AoE where there is only the one-time cost of recruitment), so you need to balance income and expenditure. I would like to use that for e.g. honey: there's no great upfront cost to creating a larva, but keeping it alive throughout its adult life will have a cost, and if honey runs out they can die / be passed over for survival in your prioritisation.

## Resource diversity

If I want to reward diversity of sub-resources such a pollen types and micro-resources, then I think the benefits to collecting an additional sub-type should be multiplicative, or at least super-linear. Maybe relative amounts of each type is a good thing to index the final benefit on (which is a feature multiplicativity can provide): 5 * 2 * 2 is only 20, while the more even 3 * 3 * 3 is 27. A simple implentation would be to have lifespan/HP be [some large constant] plus [a * b * c * d * e * f] where each letter is [the amount of sub-resource collected plus 1, to avoid zeroing everything].

I think micro-resources are probably most fun when they are largely a bonus you stumble across rather than being really common.

## Waggle dances

Waggle dances are one of the most well-known and surprising features of honeybees, so they should definitely feature. Perhaps players need to dedicate foragers to performing these dances (for some period of time) when a new site is discovered, before other foragers can be sent to the new site. This implies that foragers can have different mental maps from each other in-game.

Since foragers don't always choose to waggle-dance irl, it could be interesting to make the player do that evaluation of whether the distance + benefit is worth investing the dancing time in order to allow other foragers to be sent to that location.

Thing is, the choice of whether to do the dance is irl actually about whether we want other bees to also visit that location. This implies a different level of control than the individual bee: instead of telling individual foragers to go to that spot, this would be nudging the foragers as a whole to favour that spot. So, what is automatic, and what is dictated by the player?

# Should it be turn-based on real-time?

(Note interaction with the question of whether it should be multiplayer or single-player -- real-time probably introduces extra complication if playing 'live' against others over a network.)

### It occurred to me to wonder if there is some middle ground between real-time and turn-based.

Can turns be taken overlappingly?
- Perhaps, if we are at some early stage of a game where colonies are not yet interacting with each other. Say, everyone manages 'day 2' / 'week 2' at the same time, unless players are within each other's ~light-cones.
- Another idea is to be basically turn-based but to enable pre-moving.
- Then there is the idea of interspersing each 'step' of a move, rather than taking it in turns to take whole turns. The benefit here, relative to simultaneous whole-turns, would be to spread out the time people spend waiting for the slowest player to move. (But the slowest player would note this and take longer over these small decisions). But there is some merit I think to this, it removes the more boring period while you're waiting for other people to take the turns, which you might not even be able to see due to fog of war.
  - Natural idea for implementing the step interspersal idea would be that doing the instruction for a single bee is your 'step'. But that would slow down players with larger populations. I seem to want the rate of moves to be such that, over the same interval of time, each player may make moves for their entire population (but why do i want this?). So the turn could be divided up by the population number of the smallest colony, and larger colonies would get to move two or more bees on each move, in order to keep pace with smaller ones moving one per move. So, is that a desideratum because I don't want to 'punish' larger colonies and make the game too unwieldy at larger scales? Another idea for enabling (and incentivising) larger colonies to keep moving things at pace is to implement 'grouping', ie that you command multiple bees at once to do the same thing as each other. The more you use grouping, the more effective turns you get.

# Miscellaneous

## Counter-defenses to guards and counter-counter-defenses...

Guard bees check the scent of entering bees. What if you can research the tech of scent forgery (see 'silent robbing')? (Implementation: the sprite bears the team colour of the targeted team, but if moused over, you'd see that it's an enemy bee?) Not sure what the defence against this could be. Perhaps it's to reduce the width of the openings / increase the number of guard bees so that guards can inspect all incoming bees. And apparently "wild colonies often establish nests in cavities with naturally complex entrances (hollow trees, rock crevices)" which pose an 'entrance maze' challenge for foreign bees, which maybe works by slowing them down or making their erratic behaviour more obvious. Citation needed. https://claude.ai/chat/961fdf82-f99e-473c-a31c-ee5fe432d32a "defensive architecture". Maybe this could work by a fog-of-war mechanic, with a very short line-of-sight for the player attacking, so that they spend ages learning how to get in some entrance. Would be so cool if players could naturally learn (by nudging) this natural behaviour of maze creation without being told about it! For that to work, there should be obvious benefits to slowing down foreign bees at entrances, or creating fake entrances.

## Fleeing

Maybe there should be a mechanic where you can abandon a too-far-attacked hive and try to find a new place to set up (a la build new TC in AoE2)

## Fighting

Use of stinger kills a bee, so that's a rather attritional/pyrrhic way to attack.

Full-scale hive invasions: irl bees can try to control honey stores or whole hive structures. Thus, I think the game should allow people to validly half-invade a hive and (uncomfortably!) cohabit, and benefit from the honey stores they occupy. In order for that to work, the implementation of translating honey stores into resource counters should pay attention to either a concept of 'control' of a cell or the consumption of honey should be modelled at a low-level that tracks individual bees' hunger, feeding, and position.

Another strategy (corresponding to irl 'usurpation swarms') is one of decapitation: if you kill the resident queen, you can take over the workforce and the resources. See usurpation steps in facts-about-bees.md. A simplified implementation of the multi-step process would be that if you kill the queen, a pheromone blast pretty quickly (one turn?) converts the bees inside the hive into the enemy team. Or that an enemy queen in a hive can release her pheromones to convert nearby bees regardless of whether the original queen is dead (optionally model the 'confusion' stage of conversion). The sneaky entering is also an interesting type of strategy the deserves some thought as to how to make it inconspicuous (probably using whatever mechanic by which 'silent robbing' works).

Blockading (hive or resource): bees can monopolize resources, making fighting more interesting because it becomes about where you choose to prioritise sending your fighters, and you can do sneak raids in more than one location. 'Patrolling' an area could be an automatable mechanic that functions both as an aggressive monopolization or a defense.

## Symbiosis

Plants can’t reproduce without bees, so there could be a mechanic of plants spreading/reproducing at different rates in response to interest from bees.

## Lifespan/HP

I had lifespan/HP of bees down as something that mediates the reward for good conditions. In that case I need to make sure that that is actually beneficial! I can ensure this by making larvae development very costly / adult survival cheap.

# Epoch 1 of the whole game

The first phase of the game should be choosing your hive's location (a la Catan!) ("For bees, their forage or food supply consists of nectar and pollen from blooming plants within their *flight range*. The forage sources for honey bees are an important consideration for beekeepers. In order to determine where to locate hives for maximum honey production and brood one must consider the off-season.") Allow players to choose bad locations and discover the hard way that the food source is too far to be worth using: "Experiments have shown that beehives within 4 miles of a food source will gain weight, but beyond that *the energy expended is greater than that gained during the foraging flight*." Players should be able to discover that their bees are using up more honey in travelling to the nectar source than they end up producing.

### The 6 Factors:

Chapter 3 of 'Honeybee Democracy' says there are '6' aspects bees consider in the choice of hive.

1. Entrance size (small)
1. entrance direction: south side of tree is preferred, to stay warmer in winter (entrances can even get plugged by ice!). It is also nice to have your take-off and landing platform be heated by the sun.
1. entrance height above the ground (high, to avoid foraging mammals)
1. entrance height above the cavity floor (low)
1. cavity volume. 40L is preferred. too small (<15L) and there's not space for your honey, too big (>100L) and it's harder to keep warm. Most tree cavities are too small to hold the stores of honey a colony needs to survive winter. I assume these exist in a power-law distribution... they did an experiment on size variety of cavities (withour regard to whether occupied by bees) and only 2 of 14 cavities were larger than 15L.
1. presence of pre-existing combs in the cavity.

Most of these factors help against predators and cold winters (protection from the elements of wind and cold).

He detected *no* preference for: entrance shape, cavity shape, cavity draftyness, cavity dryness. (Probably, the ease of caulking up the drafts means it doesn't matter much.)

## April/May

"Your nest-site scouts have scoured the countryside in all directions for 3 miles for possible nest sites. They have narrowed down dozens of options to just a few select sites. The hive is now ready to deliberate" Insert each site, with a description of its benefits and drawbacks.

# Loss conditions

Hives can in fact recover from queen death! It just triggers an emergency/dangerous period. See 'queen death' section in facts-about-bees.md. Maybe the loss condition is to go a certain amount of time without a queen.

# Controlling bees

### Movements/repeated paths like AoE2 villagers

"Bees often follow efficient foraging routes called traplines" these seem to be about macro-level routes minimizing travel costs between multiple destinations: https://journals.biologists.com/jeb/article/219/16/2426/15636/Evidence-of-trapline-foraging-in-honeybees

This could be useful if we go for a more zoomed-out, superorganism-friendly style of game. Traplines, consisting of multiple bees, would be like unto the conveyor belts of Factorio.

### Roles

Claude: "This division of labor isn't completely rigid though - bees can adapt and change roles based on colony needs and conditions." So maybe there should be a mixture of automatic role allocation by age, and player editing on top of that starting point.
