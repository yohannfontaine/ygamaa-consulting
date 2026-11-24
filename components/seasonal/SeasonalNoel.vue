<script setup lang="ts">
/**
 * Christmas decoration for the logo: a hat on the anchor shape and a few
 * snowflakes around it.
 *
 * It only knows the anchors the logo hands over, never which lockup it is
 * drawn on: on the full lockup the hat lands on the lighthouse lantern, on
 * the narrow one on the caret.
 */
import type { DecorAnchors } from '~/composables/useSeasonalTheme'

const props = defineProps<{
  anchors: DecorAnchors
  anime: boolean
}>()

// The hat is drawn for a 10-unit wide shape, brim centred on its top edge.
// Scaled a fifth wider than the shape it sits on, it reads as worn rather
// than painted on, and stays recognisable at the 21px of the narrow header.
const HAT_SCALE = 1.2

const hatTransform = computed(() => {
  const { x, y, width } = props.anchors.top
  return `translate(${x} ${y}) scale(${(width * HAT_SCALE) / 10})`
})

// Resting places of the flakes, as fractions of the snow area, plus a size
// factor. Fractions rather than coordinates so the same snowfall fits around
// the lighthouse and around the caret.
const FLAKES: ReadonlyArray<readonly [u: number, v: number, size: number]> = [
  [0.12, 0.18, 1],
  [0.78, 0.08, 0.8],
  [0.62, 0.42, 1.1],
  [0.2, 0.62, 0.8],
  [0.9, 0.7, 1],
  [0.45, 0.9, 0.9],
]

const FLAKE_RADIUS = 1.4

const flakes = computed(() => {
  const { x, y, width, height } = props.anchors.area
  return FLAKES.map(([u, v, size], index) => ({
    cx: +(x + u * width).toFixed(2),
    cy: +(y + v * height).toFixed(2),
    r: +(FLAKE_RADIUS * size).toFixed(2),
    style: { '--flake-index': index },
  }))
})
</script>

<template>
  <g class="noel" :class="{ 'noel--anime': anime }">
    <circle
      v-for="(flake, index) in flakes"
      :key="index"
      class="noel__flake"
      :cx="flake.cx"
      :cy="flake.cy"
      :r="flake.r"
      :style="flake.style"
    />
    <!-- Placement goes through the attribute, the drop through CSS on an
         inner group: a CSS transform would override the attribute. -->
    <g :transform="hatTransform">
      <g class="noel__hat">
        <!-- The tip droops to the left, away from the lighthouse beam. -->
        <path
          class="noel__red"
          d="M5.8 -2 C6 -8.2 2.8 -12.6 -1.8 -12.4 C-5.2 -12.2 -7.6 -9.8 -8.4 -6.2 L-6 -6 C-5.4 -7.6 -4.4 -8.6 -3.2 -8.6 C-4.6 -6.6 -5.4 -4.4 -5.6 -2 Z"
        />
        <circle class="noel__fur" cx="-7.4" cy="-5.6" r="2.3" />
        <rect class="noel__fur" x="-6.8" y="-3.2" width="13.6" height="4" rx="2" />
      </g>
    </g>
  </g>
</template>

<style lang="scss" scoped>
// Seasonal colours stay with their decoration rather than in the design
// tokens: they only exist while the theme is on.
.noel {
  // White fur would vanish on the light header; this neutral still reads as
  // white next to the red.
  --noel-red: #d42a2a;
  --noel-fur: #{$c-neutral-200};
  --noel-snow: #{$c-accent-300};
}

.dark-mode .noel {
  --noel-red: #ef4444;
  --noel-fur: #{$c-neutral-0};
  --noel-snow: #{$c-neutral-0};
}

.noel__red {
  fill: var(--noel-red);
}

.noel__fur {
  fill: var(--noel-fur);
}

.noel__flake {
  fill: var(--noel-snow);
}

// The hat drops in once the caret has typed the name and settled: the last
// touch of the logo, not a distraction while it is being written. The delay
// comes from the logo; outside it, the hat lands at once.
@keyframes noel-hat {
  0% { opacity: 0; transform: translateY(-8px); }
  55% { opacity: 1; transform: translateY(0.8px); }
  78% { transform: translateY(-0.5px); }
  100% { opacity: 1; transform: translateY(0); }
}

// Each fall ends on the flake's resting place, so when the last fall is over
// the snow stays put, exactly as drawn without animation. A handful of falls
// rather than an endless loop: the header must not keep moving while the
// visitor reads.
@keyframes noel-flake {
  0% { opacity: 0; transform: translate(0, -12px); }
  20% { opacity: 1; }
  50% { transform: translate(1.2px, -6px); }
  100% { opacity: 1; transform: translate(0, 0); }
}

$noel-hat-duration: 0.5s;
$noel-flake-duration: 3.2s;
$noel-flake-falls: 6;
$noel-flake-stagger: 0.45s;

.noel--anime .noel__hat {
  animation: noel-hat $noel-hat-duration ease-out var(--brand-fin-frappe, 0s) both;
}

.noel--anime .noel__flake {
  animation: noel-flake $noel-flake-duration linear $noel-flake-falls both;
  animation-delay: calc(
    var(--brand-fin-frappe, 0s) + #{$noel-hat-duration} + var(--flake-index) * #{$noel-flake-stagger}
  );
}

@media (prefers-reduced-motion: reduce) {
  .noel--anime .noel__hat,
  .noel--anime .noel__flake {
    animation: none;
  }
}
</style>
