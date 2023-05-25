import Foundation

public struct SchemaLoader {
    private static var schemas = [Int: [String: Any]]()

    public static func schema(for version: Int) -> [String: Any]? {
        if let schema = schemas[version] {
            return schema
        }

        let bundlePath: URL?
        if #available(iOS 16, macOS 13, *) {
            bundlePath = Bundle.main.resourceURL?.appending(path: "VaultSchema_VaultSchema.bundle")
        } else {
            bundlePath = Bundle.main.resourceURL?.appendingPathComponent("VaultSchema_VaultSchema.bundle")
        }

        guard let bundle = bundlePath.flatMap(Bundle.init(url:)), let schema = bundle.url(forResource: "\(version)", withExtension: nil, subdirectory: "schemas") else {
            return nil
        }

        let url: URL
        if #available(iOS 16, macOS 13, *) {
            url = schema.appending(path: "vault.json")
        } else {
            url = schema.appendingPathComponent("vault.json")
        }

        do {
            let data = try Data(contentsOf: url)
            let schema = try JSONSerialization.jsonObject(with: data) as? [String: Any]
            schemas[version] = schema
            return schema
        } catch {
            print(error.localizedDescription)
            return nil
        }
    }
}
