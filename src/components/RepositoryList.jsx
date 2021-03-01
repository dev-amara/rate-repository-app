import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Chevron } from 'react-native-shapes';
import RNPickerSelect from 'react-native-picker-select';

import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    searchBar: {
        marginHorizontal: 15,
        marginTop: 15,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
    const history = useHistory();

    const viewSingleRepo = (id) => {
        history.push(`/repository/${id}`);
    };

    // get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => viewSingleRepo(item.id)}
                >
                    <RepositoryItem
                        key={item.id}
                        item={item}
                        singleRepo={false}
                    />
                </TouchableOpacity>
            )}
        />
    );
};

const RepositoryList = () => {
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('DESC');
    const [sortType, setSortType] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchKeyword] = useDebounce(searchText, 500);
    const { repositories, fetchMore } = useRepositories({
        first: 6,
        orderBy,
        orderDirection,
        searchKeyword,
    });

    const handleChoice = (itemValue) => {
        setSortType(itemValue);
        if (itemValue === 'latest') {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
        } else if (itemValue === 'highest') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
        } else if (itemValue === 'lowest') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
        }
    };

    const onEndReach = () => {
        fetchMore();
    };

    return (
        <>
            <Searchbar
                style={styles.searchBar}
                autoCapitalize="none"
                placeholder="Search"
                onChangeText={(query) => setSearchText(query)}
                value={searchText}
            />

            <View paddingVertical={10} />
            <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(itemValue) => handleChoice(itemValue)}
                items={[
                    { label: 'Latest repositories', value: 'latest' },
                    { label: 'Highest rated repositories', value: 'highest' },
                    { label: 'Lowest rated repositories', value: 'lowest' },
                ]}
                Icon={() => {
                    return <Chevron size={1.5} color="gray" />;
                }}
            />
            <View paddingVertical={10} />

            <RepositoryListContainer
                repositories={repositories}
                onEndReach={onEndReach}
            />
        </>
    );
};

export default RepositoryList;
