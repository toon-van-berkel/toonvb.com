// Parametric visual screw experiment
// Units: millimetres. This is a visual model, not a certified fastener.

shaft_length = 34;
shaft_diameter = 8;
thread_pitch = 3.2;
head_diameter = 14;
head_height = 6;

$fn = 64;

thread_height = thread_pitch * 0.32;
shaft_radius = shaft_diameter / 2;

module helical_thread() {
    // A triangular profile is twisted around the shaft to form real geometry.
    linear_extrude(
        height = shaft_length - 2,
        twist = 360 * (shaft_length - 2) / thread_pitch,
        slices = ceil((shaft_length - 2) * 12),
        convexity = 10
    )
        translate([shaft_radius, 0, 0])
            polygon([
                [0, -thread_height / 2],
                [thread_height, 0],
                [0, thread_height / 2]
            ]);
}

module socket_head() {
    difference() {
        cylinder(d = head_diameter, h = head_height);
        // Hexagonal inbus recess, deliberately shallow for clear viewing.
        translate([0, 0, head_height - 2.8])
            cylinder(r = head_diameter * 0.25, h = 3, $fn = 6);
    }
}

// Tip, shaft, visible helical thread and cylindrical socket head.
union() {
    translate([0, 0, 2])
        cylinder(d1 = shaft_diameter * 0.55, d2 = shaft_diameter, h = 4);
    translate([0, 0, 6])
        cylinder(d = shaft_diameter, h = shaft_length);
    translate([0, 0, 7])
        helical_thread();
    translate([0, 0, 6 + shaft_length])
        socket_head();
}
