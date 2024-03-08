export function divideParagraph(paragraph: string) {
    // Split the paragraph into sentences
    const sentences = paragraph?.split('. ');

    // Calculate the number of sentences in each part
    const partLength = Math.ceil(sentences?.length / 3);

    // Divide the sentences into three parts
    const part1 = sentences?.slice(0, partLength).join('. ');
    const part2 = sentences?.slice(partLength, 2 * partLength).join('. ');
    const part3 = sentences?.slice(2 * partLength).join('. ');

    return [part1, part2, part3];
}