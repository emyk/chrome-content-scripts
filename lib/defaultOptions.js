const jenkinsCss = `
.bigtable tr:hover {
    background: #ccc!important;
}

.bigtable td:nth-child(3n+1),
.bigtable td:nth-child(4n+1) {
    max-width: 150px;
}
`;

export default {
    jenkinsCss,
    jenkinsUrls: ['til0elsa-build-app01:8080']
};