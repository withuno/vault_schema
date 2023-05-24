import Foundation

public final class SchemaLoader {
	public func loadSchema(version: Int) -> [String: Any]? {
        guard let path = Bundle(for: Self.self).path(forResource: "vault", ofType: "json", inDirectory: "\(version)") else { return nil }
		do {
            let data = try Data(contentsOf: URL(fileURLWithPath: path))
            return try JSONSerialization.jsonObject(with: data) as? [String: Any]
        } catch {
            print(error.localizedDescription)
            return nil
        }
	}	
}