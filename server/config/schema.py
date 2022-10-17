import graphene
import accounts.schema as accounts

class Query(accounts.Query, graphene.ObjectType):
    pass

class Mutation(accounts.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)