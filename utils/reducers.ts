type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Actions {
  SET_LOCATION = 'SET_LOCATION',
  SET_DOCTOR = 'SET_DOCTOR',
  SET_DOCTORS = 'SET_DOCTORS',
  SET_LOCATIONS = 'SET_LOCATIONS',
  SET_SEARCH_TYPE = 'SET_SEARCH_TYPE',
}

export type State = {
  doctor: string;
  doctors: string[];
  location: string;
  locations: string[];
  searchType?: 'doctor' | 'location';
};

type PayloadTypes = {
  [Actions.SET_DOCTOR]: string;
  [Actions.SET_LOCATION]: string;
  [Actions.SET_DOCTORS]: string[];
  [Actions.SET_LOCATIONS]: string[];
  [Actions.SET_SEARCH_TYPE]: 'doctor' | 'location';
};

export type ActionTypes = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];

export const reducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case Actions.SET_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };
    case Actions.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case Actions.SET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    case Actions.SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    case Actions.SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };
    default:
      return state;
  }
};
