export async function sendMessage(text: string, isLocal: boolean) {
    console.log(`sending slack message ${text} - local enviroment ${isLocal}`);
    const url = isLocal ? 'https://localhost:7004/slackTest' : 'https://yurifx.azurewebsites.net/slackTest';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
    })
        .then((res) => res.json())
        .then((x) => console.log(x));
}