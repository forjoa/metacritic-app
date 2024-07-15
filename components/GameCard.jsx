import { useEffect, useRef } from 'react'
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native'

export function GameCard({ game }) {
    return (
        <View key={game.slug} style={styles.card}>
            <Image
                source={{ uri: game.image }}
                style={styles.image}
            />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.score}>{game.score}</Text>
            <Text style={styles.description}>{game.description}</Text>
        </View>
    )
}

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true
        }).start()
    }, [index, opacity])

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10
    },
    description: {
        color: '#eee',
        fontSize: 16
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10
    },
    card: {
        marginBottom: 42,
    },
    image: {
        width: 107,
        height: 147,
        borderRadius: 10
    },
})