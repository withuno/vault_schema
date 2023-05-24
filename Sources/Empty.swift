public final class SchemaLoader {
	public func loadSchema(version: Int) -> [String: Any]? {
		let path = Bundle(for: Self.self).path(forResource: "vault", ofType: "json", inDirectory: "\(version)")
		do {
            let data = try Data(contentsOf: URL(fileURLWithPath: path))
            return try JSONSerialization.jsonObject(with: data) as? [String: Any]
        } catch {
            print(error.localizedDescription)
            return nil
        }
	}	
}