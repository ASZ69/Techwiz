//                 animation working start

variables(".AnrubberBand", "rubberBand", "normal");
variables(".AnslideInLeft", "slideInLeft", "slow");
variables(".AnslideInRight", "slideInRight", "fast");
variables(".AnrotateIn", "rotateIn", "slower");
variables(".AnrotataDown", "rotateInDownLeft", "slower");
variables(".AnflipInX", "flipInX", "slower");
variables(".slideInUp", "slideInUp", "slower");

function variables(id, classList, unRemoveableClasses) {

    $(id).appear();

    $(document.body).on('appear', id, function (e, $affected) {
        $affected.addClass('animated ' + classList + ' ' + unRemoveableClasses);
    });

    $(document.body).on('disappear', id, function (e, $affected) {
        $affected.removeClass(classList);
    });
}