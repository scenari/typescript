import {Node, SourceFile, TransformationContext, EmitFlags} from "../types.js";
import {visitEachChild, visitNode} from "../visitorPublic.js";
import {addEmitFlags} from "../factory/emitNode.js";

export default function noAsciiEscaping(context: TransformationContext) {
    return (source: SourceFile) => {
        function visit(node: Node): Node {
            addEmitFlags(node, EmitFlags.NoAsciiEscaping);
            return visitEachChild(node, visit, context);
        }

        return visitNode(source, visit) as SourceFile;
    }
}
