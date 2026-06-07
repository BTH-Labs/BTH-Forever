// BTH Forever - biome spawn tweaks
//
// Makes modded mobs (Let's Do, Naturalist, Friends&Foes) spawn in matching
// Terralith biomes by adding those biomes to the spawn biome *tags* each mod
// already uses to decide where its mobs appear. Tags merge additively, so this
// only ADDS biomes - it never removes a mod's own entries, and the mods' own
// spawn weights are reused.
//
// Mods NOT listed here were checked and need nothing: they already key their
// spawns on vanilla #minecraft:is_* tags (Hexalia, Forbidden Arcanus) or on
// #is_overworld / permissive include-all (Aquaculture fish), all of which
// Terralith biomes already belong to; or their mobs come from structures /
// their own dimension (Bosses'Rise, Bumblezone, Twilight Forest, Create
// Dragons Plus).
//
// -------------------------------------------------------------------------
// HOW TO ADD / CHANGE AN ENTRY
// -------------------------------------------------------------------------
// Each key in SPAWN_TWEAKS is a mob's spawn biome tag; the value is the list of
// extra biomes to spawn it in. To tweak a mob, edit its list. To cover a new
// mob, add its spawn tag (find it in the mod jar under
// data/<mod>/tags/worldgen/biome/spawns_*.json) and the biomes you want.
//
// NOTES
// - Mobs whose tag already references a vanilla biome tag (#minecraft:is_forest,
//   #is_savanna, #is_river) ALREADY get Terralith's forest/savanna/river biomes,
//   because Terralith injects its biomes into those vanilla tags. For those mobs
//   the lists below only add Terralith biomes that fall OUTSIDE the vanilla tag.
// - Meadow's wooly cow picks its breed from the biome tag: meadow:is_meadow ->
//   Highland Cattle (this is also the tag that makes wooly cows spawn at all).
//   Adding a biome here spawns Highland Cattle with no meadow grass/feature
//   changes (those target the literal minecraft:meadow biome, not this tag).
// - For a mob whose mod has NO spawn tag, use a NeoForge add_spawns biome
//   modifier instead: kubejs/data/<ns>/neoforge/biome_modifier/<name>.json
//   (https://docs.neoforged.net/docs/worldgen/biomemodifier/).

const SPAWN_TWEAKS = {
  // ===== [Let's Do] Meadow ==================================================

  // Highland Cattle - rugged grassy uplands / Scottish-highland pastures.
  'meadow:is_meadow': [
    'terralith:highlands',
    'terralith:alpine_highlands',
    'terralith:temperate_highlands',
    'terralith:arid_highlands',
    'terralith:mountain_steppe',
    'terralith:blooming_plateau',
    'terralith:emerald_peaks',
  ],

  // Water Buffalo - wetlands and warm water (already #is_savanna, #is_river, swamp).
  'meadow:spawns_buffalo': [
    'terralith:orchid_swamp',
    'terralith:desert_oasis',
    'terralith:red_oasis',
    'terralith:tropical_jungle',
  ],

  // ===== [Let's Do] Wildernature ============================================

  // Bison - prairie / steppe / open grassland (already #is_savanna). Yellowstone
  // is the real-world bison range.
  'wildernature:spawns_bison': [
    'terralith:yellowstone',
    'terralith:steppe',
    'terralith:mountain_steppe',
    'terralith:shrubland',
    'terralith:brushland',
    'terralith:savanna_badlands',
    'terralith:valley_clearing',
    'terralith:shield_clearing',
  ],

  // Wild Boar - woodland and scrub (already #is_forest, #is_savanna).
  'wildernature:spawns_boar': [
    'terralith:brushland',
    'terralith:shrubland',
    'terralith:rocky_shrubland',
    'terralith:blooming_valley',
    'terralith:mountain_steppe',
  ],

  // Cassowary - real habitat is tropical rainforest (mod default is savanna).
  'wildernature:spawns_cassowary': [
    'terralith:tropical_jungle',
    'terralith:rocky_jungle',
    'terralith:amethyst_rainforest',
    'terralith:jungle_mountains',
  ],

  // Deer - widespread temperate woodland and grassland (already #is_forest).
  'wildernature:spawns_deer': [
    'terralith:blooming_valley',
    'terralith:valley_clearing',
    'terralith:shield_clearing',
    'terralith:highlands',
    'terralith:mountain_steppe',
    'terralith:brushland',
  ],

  // Dog - open plains and grassland near where people would settle (vanilla: plains only).
  'wildernature:spawns_dog': [
    'terralith:valley_clearing',
    'terralith:shield_clearing',
    'terralith:steppe',
    'terralith:shrubland',
    'terralith:highlands',
  ],

  // Flamingo - shallow warm lagoons, oases and salt flats (vanilla: beach only).
  'wildernature:spawns_flamingo': [
    'terralith:desert_oasis',
    'terralith:red_oasis',
    'terralith:warm_river',
    'terralith:gravel_beach',
  ],

  // Hedgehog - temperate woodland edges, shrubland and meadow (already #is_forest).
  'wildernature:spawns_hedgehog': [
    'terralith:shrubland',
    'terralith:brushland',
    'terralith:blooming_valley',
    'terralith:blooming_plateau',
    'terralith:valley_clearing',
  ],

  // Mini Sheep - high alpine meadows, peaks and cliffs (vanilla: meadow + peaks).
  'wildernature:spawns_minisheep': [
    'terralith:alpine_highlands',
    'terralith:alpine_grove',
    'terralith:highlands',
    'terralith:temperate_highlands',
    'terralith:emerald_peaks',
    'terralith:rocky_mountains',
    'terralith:scarlet_mountains',
    'terralith:stony_spires',
    'terralith:granite_cliffs',
    'terralith:windswept_spires',
    'terralith:snowy_cherry_grove',
    'terralith:sakura_grove',
    'terralith:blooming_plateau',
    'terralith:mountain_steppe',
    'terralith:haze_mountain',
  ],

  // Owl - forests and forest-edge highland (already #is_forest).
  'wildernature:spawns_owl': [
    'terralith:blooming_valley',
    'terralith:shield_clearing',
    'terralith:highlands',
    'terralith:mountain_steppe',
  ],

  // Pelican - coasts, rivers, lakes and oases (already #is_river, beach).
  'wildernature:spawns_pelican': [
    'terralith:desert_oasis',
    'terralith:red_oasis',
    'terralith:gravel_beach',
    'terralith:orchid_swamp',
  ],

  // Penguin - polar ice and frozen coasts (vanilla: frozen oceans + ice spikes).
  'wildernature:spawns_penguin': [
    'terralith:glacial_chasm',
    'terralith:frozen_cliffs',
    'terralith:alpha_islands_winter',
  ],

  // Raccoon - mixed woodland near water (vanilla: plains only).
  'wildernature:spawns_raccoon': [
    'terralith:blooming_valley',
    'terralith:lush_valley',
    'terralith:valley_clearing',
    'terralith:shield_clearing',
    'terralith:orchid_swamp',
    'terralith:warm_river',
    'terralith:lavender_forest',
  ],

  // Red Wolf - coniferous / boreal forest (vanilla: old-growth pine taiga only).
  'wildernature:spawns_red_wolf': [
    'terralith:shield',
    'terralith:snowy_shield',
    'terralith:siberian_taiga',
    'terralith:siberian_grove',
    'terralith:wintry_forest',
    'terralith:snowy_maple_forest',
    'terralith:forested_highlands',
    'terralith:yellowstone',
  ],

  // Squirrel - virtually any forest or wooded valley (vanilla: literal forests + plains).
  'wildernature:spawns_squirrel': [
    'terralith:lavender_forest',
    'terralith:lavender_valley',
    'terralith:sakura_grove',
    'terralith:sakura_valley',
    'terralith:blooming_valley',
    'terralith:lush_valley',
    'terralith:valley_clearing',
    'terralith:shield_clearing',
    'terralith:white_cliffs',
    'terralith:temperate_highlands',
    'terralith:forested_highlands',
    'terralith:cloud_forest',
    'terralith:alpine_grove',
    'terralith:birch_taiga',
  ],

  // Turkey - North American woodland and grassland (already #is_forest).
  'wildernature:spawns_turkey': [
    'terralith:shrubland',
    'terralith:brushland',
    'terralith:blooming_valley',
    'terralith:valley_clearing',
    'terralith:steppe',
    'terralith:mountain_steppe',
  ],

  // ===== Naturalist =========================================================
  // Naturalist already covers forest / taiga / savanna / mountain / badlands /
  // jungle via #minecraft:is_* tags (which Terralith injects into). The entries
  // below only fill the gaps where Naturalist used LITERAL vanilla biomes
  // (swamp, desert, plains, beach, river) that Terralith does not extend.

  // Alligator - warm swamps and slow rivers (river was a literal biome).
  'naturalist:has_alligator': ['terralith:orchid_swamp', 'terralith:warm_river'],
  // Bass - still freshwater (river already #is_river).
  'naturalist:has_bass': ['terralith:orchid_swamp'],
  // Catfish - murky swamp water.
  'naturalist:has_catfish': ['terralith:orchid_swamp'],
  // Dragonfly - wetlands and riversides.
  'naturalist:has_dragonfly': ['terralith:orchid_swamp', 'terralith:warm_river'],
  // Duck - ponds and swamps (river already #is_river).
  'naturalist:has_duck': ['terralith:orchid_swamp'],
  // Snake - dry grassland and wetlands (forest already covered).
  'naturalist:has_snake': [
    'terralith:steppe',
    'terralith:shrubland',
    'terralith:brushland',
    'terralith:valley_clearing',
    'terralith:orchid_swamp',
  ],
  // Snail - damp grassland and wetlands.
  'naturalist:has_snail': [
    'terralith:orchid_swamp',
    'terralith:valley_clearing',
    'terralith:blooming_valley',
  ],
  // Lizard - hot deserts and dry scrub (jungle / savanna already covered).
  'naturalist:has_lizard': [
    'terralith:ancient_sands',
    'terralith:desert_canyon',
    'terralith:desert_spires',
    'terralith:lush_desert',
    'terralith:sandstone_valley',
    'terralith:red_oasis',
  ],
  // Tortoise - deserts and dry shrub (jungle already covered).
  'naturalist:has_tortoise': [
    'terralith:ancient_sands',
    'terralith:desert_canyon',
    'terralith:lush_desert',
    'terralith:sandstone_valley',
  ],
  // Rattlesnake - arid deserts and rocky drylands (savanna / badlands covered).
  'naturalist:has_rattlesnake': [
    'terralith:ancient_sands',
    'terralith:desert_canyon',
    'terralith:desert_spires',
    'terralith:lush_desert',
    'terralith:sandstone_valley',
    'terralith:white_mesa',
    'terralith:red_oasis',
    'terralith:gravel_desert',
  ],
  // Vulture - deserts, badlands and barren ground (savanna / badlands covered).
  'naturalist:has_vulture': [
    'terralith:ancient_sands',
    'terralith:desert_canyon',
    'terralith:desert_spires',
    'terralith:lush_desert',
    'terralith:sandstone_valley',
    'terralith:white_mesa',
    'terralith:gravel_desert',
    'terralith:snowy_badlands',
  ],
  // Coral Snake - sandy coasts and dry sands (jungle / river already covered).
  'naturalist:has_coral_snake': ['terralith:gravel_beach', 'terralith:ancient_sands'],
  // Sparrow - open grassland (vanilla: plains + cherry grove only, no #tag).
  'naturalist:has_sparrow': [
    'terralith:steppe',
    'terralith:shrubland',
    'terralith:brushland',
    'terralith:valley_clearing',
    'terralith:shield_clearing',
    'terralith:blooming_valley',
    'terralith:mountain_steppe',
  ],
  // Robin - grassland and meadow edges (forest / mountain already covered).
  'naturalist:has_robin': [
    'terralith:valley_clearing',
    'terralith:shield_clearing',
    'terralith:steppe',
    'terralith:blooming_valley',
  ],
  // Butterfly - flowery meadows and wetlands (forest already covered).
  'naturalist:has_butterfly': [
    'terralith:blooming_valley',
    'terralith:blooming_plateau',
    'terralith:lavender_valley',
    'terralith:valley_clearing',
    'terralith:orchid_swamp',
  ],
  // Firefly - damp grassland and wetlands (forest already covered).
  'naturalist:has_firefly': [
    'terralith:orchid_swamp',
    'terralith:blooming_valley',
    'terralith:valley_clearing',
  ],
  // Bluejay - cold open country (taiga / hill already covered).
  'naturalist:has_bluejay': ['terralith:cold_shrubland', 'terralith:snowy_badlands'],

  // ===== Friends&Foes =======================================================
  // Friends&Foes already ships Terralith compat for its snowy / taiga mobs
  // (iceologer, illusioner) and uses #is_* / #forge:is_* for the maulers. Only
  // its literal-biome spawns need help.

  // Moobloom (buttercup) - flowery meadows.
  'friendsandfoes:has_moobloom/buttercup': [
    'terralith:blooming_valley',
    'terralith:blooming_plateau',
    'terralith:lavender_valley',
  ],
  // Crab - beaches and wetlands.
  'friendsandfoes:has_crab': ['terralith:gravel_beach', 'terralith:orchid_swamp'],
}

ServerEvents.tags('worldgen/biome', event => {
  for (const [tag, biomes] of Object.entries(SPAWN_TWEAKS)) {
    biomes.forEach(biome => event.add(tag, biome))
  }
})
