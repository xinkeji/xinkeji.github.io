export default function handler(req, res) {
    res.send(`{
        "links": [
            {
                "rel": "http://nodeinfo.diaspora.software/ns/schema/2.0",
                "href": "https://m.g0f.cn/nodeinfo/2.0"
            }
        ]
    }`);
}
