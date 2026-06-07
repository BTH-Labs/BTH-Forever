// BTH Forever - biome spawn tweaks
//
// Makes modded mobs spawn in modded biomes (e.g. Terralith) by adding those
// biomes to the spawn biome *tags* that mods already use to decide where their
// mobs appear. Tags merge additively, so this only ADDS biomes - it never
// removes a mod's own entries.
//
// -------------------------------------------------------------------------
// HOW TO ADD A NEW ENTRY
// -------------------------------------------------------------------------
// Add a line to SPAWN_TWEAKS below: a spawn biome tag mapped to the extra
// biomes you want included. The mob's own mod supplies the tag and the spawn
// weights, so you only choose WHERE - nothing else changes.
//
// [Let's Do] Meadow - the wooly cow's VARIANT is also picked by which tag the
// biome carries, so the tag you pick decides which breed spawns:
//   meadow:is_meadow         -> Highland Cattle  (also the tag that makes wooly cows spawn at all)
//   meadow:spawns_umbra_cow  -> Umbra Cow
//   meadow:spawns_warped_cow -> Warped Cow
//   meadow:spawns_buffalo    -> Water Buffalo
// Adding a biome to meadow:is_meadow makes Highland Cattle spawn there with the
// mod's own spawn weights. It does NOT repaint the biome or add meadow features:
// the meadow grass/foliage/feature modifiers target the literal minecraft:meadow
// biome, not this tag.
//
// For mobs whose mod does NOT expose a spawn biome tag, use a NeoForge
// add_spawns biome modifier instead - drop a JSON at
// kubejs/data/<namespace>/neoforge/biome_modifier/<name>.json (see the NeoForge
// docs: https://docs.neoforged.net/docs/worldgen/biomemodifier/).

const SPAWN_TWEAKS = {
  // Highland Cattle (meadow:wooly_cow, highland variant) in Terralith highlands.
  'meadow:is_meadow': [
    'terralith:highlands',
    'terralith:alpine_highlands',
  ],
}

ServerEvents.tags('worldgen/biome', event => {
  for (const [tag, biomes] of Object.entries(SPAWN_TWEAKS)) {
    biomes.forEach(biome => event.add(tag, biome))
  }
})
