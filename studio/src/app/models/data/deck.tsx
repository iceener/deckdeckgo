export interface DeckAttributes {
    style?: string;
}

export interface DeckData {
    name: string;
    attributes?: DeckAttributes;
    background?: string;

    owner_id: string;

    slides?: string[];

    created_at?: firebase.firestore.Timestamp;
    updated_at?: firebase.firestore.Timestamp;
}

export interface Deck {
    id: string;
    data: DeckData;
}

