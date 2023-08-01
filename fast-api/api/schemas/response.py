from pydantic import BaseModel
class Response(BaseModel):
    data: object
    message: str
    status: int
