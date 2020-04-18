export async function getApi<T>(method: string): Promise<T> {
    const result = await fetch(`/api/${method}`);
    if (result.status !== 200) {
        throw Error(result.statusText);
    }
    return await result.json();
}

export async function postApi<T>(method: string, body: any): Promise<T> {
    const result = await fetch(`api/${method}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    });

    if (result.status !== 200) {
        throw Error(result.statusText);
    }
    return await result.json();
}

export const getMainHeader = async (): Promise<string> => {
    try {
        const response = await getApi<{ text: string }>('headerText');
        return response.text;
    } catch (e) {
        return `server error ${e}`
    }
};

export const getMainPost = async (param: {text: string}): Promise<string> => {
    const response = await postApi<{text: string}>('headerPost', {param});
    return response.text;
};