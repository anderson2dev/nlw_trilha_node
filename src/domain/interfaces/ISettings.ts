interface ISettingsRequest {
    chat: boolean,
    username: String,
}

interface ISettingsResponse {
    id: String ;
    chat?: Boolean | undefined;
    username: String;
    created_at: Date;
    updated_at: Date;
}

export  {
    ISettingsRequest,
    ISettingsResponse
};