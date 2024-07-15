import { useEffect, useState } from 'react'
import {
    View,
    ActivityIndicator,
    FlatList
} from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatedGameCard } from './GameCard'
import { Logo } from './Logo'

export function Main() {
    const [games, setGames] = useState([])
    const insets = useSafeAreaInsets()

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games)
        })
    }, [])

    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={{ marginBottom: 20 }}>
                <Logo />
            </View>
            {games.lenght === 0 ? (
                <ActivityIndicator color={'#fff'} size={'large'} />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={game => game.slug}
                    renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index}/>}
                />
            )}
        </View>
    )
}


