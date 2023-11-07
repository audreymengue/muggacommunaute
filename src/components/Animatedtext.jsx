import { useSpring, animated } from 'react-spring';

function AnimatedText() {
    const props = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
    });

    return (
        <animated.div style={props}>
            <h1>Your Animated Text Goes de</h1>
        </animated.div>
    );
}

export default AnimatedText;
